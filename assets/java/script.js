// Assignment Code
var generateBtn = document.querySelector("#generate");
var displayedPass = document.querySelector('#password')
var numsChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var alphLowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphUpperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specChars = ['!', '@', '#', '$', '%', '^', '&', '*', '+'];
var passLength;
var generatePassword;
var getRandom;
var passChoices;


// User will be asked the following prompts/alerts in order to start generating a password
function userInput() {
  var passLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters");
  if (passLength < 8 || passLength > 128) {
    alert("I'm going to need a number between 8-128 characters :) Click the generate button when you are ready to try again.");
    return;
  }
  // These are the choices the user may select.
  var useLowerCase = confirm('Use lowercase letters? If not, select cancel.');
  var useUpperCase = confirm('Use UPPERCASE letters? If not, select cancel.');
  var useSpecials = confirm('Use special (!@#$%^&*+) characters? If not, select cancel.');
  var useNumbahs = confirm('Use Numbers? (0-9) If not, select cancel.');
  // They will be prompted to restart if they decline to select any options.
  if (!useLowerCase && !useUpperCase && !useSpecials && !useNumbahs) {
    alert("Well you have to pick something ಠ_ಠ");
    return;
  }
  // Choices selected become choices that will be valid and therefore used
  var passChoices = {
    passLength: passLength,
    useLowerCase: useLowerCase,
    useUpperCase: useUpperCase,
    useSpecials: useSpecials,
    useNumbahs: useNumbahs
  }
  return passChoices;

}
// Starting the outputs
function generatePassword() {
  var userData = userInput();
  var passResult = [];
  var passAllTypes = [];

  if (userData.useLowerCase) {
    passAllTypes = passAllTypes.concat(alphLowerChars);
  }
  if (userData.useUpperCase) {
    passAllTypes = passAllTypes.concat(alphUpperChars);
  } if (userData.useSpecials) {
    passAllTypes = passAllTypes.concat(specChars);
  } if (userData.useNumbahs) {
    passAllTypes = passAllTypes.concat(numsChars);
  }
  // Now we create a loop so that we can recreate repeat the randomization until the length the user chose is completed.
  let password = "";
  let character = "";
  for (let i = 0; i < userData.passLength; i++) {
    character = getRandom(passAllTypes)
    password = password + character
  }
  return password
  function getRandom(someArray) {
    var randIndex = Math.floor(Math.random() * someArray.length);
    var randElement = someArray[randIndex]
    return randElement
  }
}
// The password went thru the loop enough times to satisfy the users selections! Now we display our new password
function writePassword() {
  var newPassword = generatePassword();
  var password = document.querySelector("#password");
  password.value = newPassword;
}
// We lastly are adding an event listener so the generate button clicks and begins the selection process for our lovely user.
generateBtn.addEventListener("click", writePassword);
// Wohoo we've reached the end! I'd like to thank my tutor and all 5 BCS Learning Assistants even if things become overcomplicated along the way. ~(˘◡˘)~