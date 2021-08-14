// Assignment Code
var generateBtn = document.querySelector("#generate");
var numsChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var alphLowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphUpperChars = ['A' , 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specChars = ['!', '@', '#', '$', '%', '^', '&', '*', '+'];
var passLength;
var numsRight;
var alphRight;
var specRight;
var generatePassword;
var getRandom;
var passChoices;


// userInput();--------------------

// User will be asked the following prompts/alerts in order to start generating a password
function userInput() {
  var passLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters");
    if (passLength < 8 || passLength > 128){
    alert("I'm gonna need something between 8-128 characters :) Click the generate button when you decide... ya silly bear");
    return;
  }
  // These are the actual choices the user has to pick from. If they don't pick anything they and will be prompted for their silliness
  var useLowerCase = confirm('Use lowercase letters? If not, select cancel.');
  var useUpperCase = confirm('Use UPPERCASE letters? If not, select cancel.');
  var useSpecials = confirm('Use special (!@#$%^&*+) characters? If not, select cancel.');
  var useNumbahs = confirm('Use Numbers? (0-9) If not, select cancel.');
  if (!useLowerCase && !useUpperCase && !useSpecials && !useNumbahs) {
   alert("Well you have to pick something ಠ_ಠ");
   return;
  }
  // Choices selected become choices that will be valid
  var passChoices = {
    passLength: passLength,
    useLowerCase: useLowerCase,
    useUpperCase: useUpperCase,
    useSpecials: useSpecials,
    useNumbahs: useNumbahs
  }
  return passChoices;

}

// Starting the actual output
// passResult(); ???
function generatePassword() {
var userData = userInput();
var passResult = [];
var passAllTypes = [];
var guaranteedTypes = [];


if (userData.useLowerCase){
  // .concat .push (getRandom)
passAllTypes = passAllTypes.concat(alphLowerChars);
guaranteedTypes.push(getRandom(alphLowerChars));
console.log('passAllTypes', passAllTypes)
console.log('guaranteedTypes', guaranteedTypes)
}

if (userData.useUpperCase){
passAllTypes = passAllTypes.concat(alphUpperChars);
guaranteedTypes.push(getRandom(alphUpperChars));
console.log('passAllTypes', passAllTypes)
console.log('guaranteedTypes', guaranteedTypes)
}

if (userData.useSpecials){
passAllTypes = passAllTypes.concat(specChars);
guaranteedTypes.push(getRandom(specChars));
console.log('passAllTypes', passAllTypes)
console.log('guaranteedTypes', guaranteedTypes)
}

if (userData.useNumbahs){
passAllTypes = passAllTypes.concat(numsChars);
guaranteedTypes.push(getRandom(numsChars));
console.log('passAllTypes', passAllTypes)
console.log('guaranteedTypes', guaranteedTypes)
}
}


// this is from the video bcs sent earlier (and I understand the math.floor and math.random definitions, just not how to use them with arrays)
// need to return back to where functions are being called
function getRandom(someArray) {
var randIndex = Math.floor(Math.random() * someArray.length);
var randElement = someArray[randIndex]
return randElement
}

//getrandomchar types from somearry (however many times) 
// forloop using your passLength

for (let i = 0; i < someArray.length; i++){
  
}
  


// given code - hw
// This area allows for the code to show up in the 'box' by linking html id = 'password'
function writePassword() {
  console.log(passChoices)
  var passLength = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button -hw
generateBtn.addEventListener("click", writePassword);//}
