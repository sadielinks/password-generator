// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChars = "abcdefghijklmnopqrstuvwxyz"
var numberChars = "123456789"
var specialChars = "!@#$%^&*+"
var length;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
