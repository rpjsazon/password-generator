// Array of special characters to be included in password
var specialCharacters = "@%+\/'!#$^?:,)(}{][~-_.";
  // '@',
  // '%',
  // '+',
  // '\\',
  // '/',
  // "'",
  // '!',
  // '#',
  // '$',
  // '^',
  // '?',
  // ':',
  // ',',
  // ')',
  // '(',
  // '}',
  // '{',
  // ']',
  // '[',
  // '~',
  // '-',
  // '_',
  // '.'

// I changed to this format because it seemed that if I put it on array, my code is detecting the ",".
// Array of numeric characters to be included in password
var numericCharacters = "0123456789";
// Array of lowercase characters to be included in password
var lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz";
// Array of uppercase characters to be included in password
var upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// For loop: getPassword = charSet + random characters * length 
var getPassword = "";
var charSet = "";

// Function to prompt user for password options
function getPasswordOptions() {
}

function getRandom(arr) {

  var passLength = prompt("Enter the desired length of the password (at least 10 characters and no more than 64):");
  if (passLength < 10 || passLength > 64) {
    alert("Password length must be at least 10 characters and no more than 64.");
    return;
  }

  var lowercase = confirm("Include lowercase characters?");
  var uppercase = confirm("Include uppercase characters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters ($@%&*, etc)?");
  if (!lowercase && !uppercase && !numeric && !special) {
    alert("You must select at least one character type.");
    return;
  }

  // I created a empty var "charset" to add characters in it depending on how many passLength input.
  if (lowercase) 
    charSet += lowerCasedCharacters;
  if (uppercase) 
    charSet += upperCasedCharacters;
  if (numeric) 
    charSet += numericCharacters;
  if (special) 
    charSet += specialCharacters;

  // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
  // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  // Reference: https://dev.to/code_mystery/random-password-generator-using-javascript-6a
  for (let i = 0; i < passLength; i++) {
    getPassword += charSet[Math.floor(Math.random() * charSet.length)];
  }
}

// Function to generate password with user input
function generatePassword() {
  getRandom()
    return getPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);