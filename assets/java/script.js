// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphetChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberChars = "123456789"
var specialChars = "!@#$%^&*+"
var length;
var 

// Write password to the #password input
// Ok here's what we need:
// must be between 8 -128 characters
// uppercase?
// lowercase?
// numeric?
// special characters?



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Alerts when they mess up -_-
// Plz enter how many digits 
// Plz answer yes or no


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
