// Assignment Code - hw
var generateBtn = document.querySelector("#generate");
var numsChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var alphLowerChars = "abcdefghijklmnopqrstuvwxyz";
var alphUpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specChars = "!@#$%^&*+";
var passLength;
var numsRight;
var alphRight;
var specRight;

// Write password to the #password input -hw
// Ok here's what we need:
// must be between 8 -128 characters
// uppercase?
// lowercase?
// numeric?
// special characters?

userInput();

function userInput() {
  var passLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters");
    if (passLength < 8 || passLength > 128 ){
    alert("I'm gonna need something between 8-128 characters :)");
}
var useLowerCase = confirm('Use LowerCase?');
var useUpperCase = confirm('Use Uppers?');
var useSpecials = confirm('Use Specials?');
var useNumbahs = confirm('Use Numbers?');

}

function generatePassword() {

}






//---------- given code from hw
function writePassword() {
  var passwordLength = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// remember: each one:
// Alerts when they mess up -_-
// Plz enter how many/what digits 
// Plz answer yes or no


// Add event listener to generate button -hw
generateBtn.addEventListener("click", writePassword);
