// Assignment Code - hw
var generateBtn = document.querySelector("#generate");
var numsChars = "123456789";
var alphChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specChars = "!@#$%^&*+";
var passLength;
var numsRight;
var alphRight;
var specRight;
var 

// Write password to the #password input -hw
// Ok here's what we need:
// must be between 8 -128 characters
// uppercase?
// lowercase?
// numeric?
// special characters?

function generatePassword() {


var passLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters"));
  if ((passLength < 8 || passLength > 128 );
    alert("I'm gonna need something between 8-128 characters :)");
  else if {
    numsRight = numsRight("");
    alphRight = alphRight("");
    specRight = specRight("");

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
