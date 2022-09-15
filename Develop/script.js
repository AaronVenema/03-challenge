// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var numOfCharacters=0;
var useLowerCaseLtrs;
var useUppercaseLtrs; 
var useNumber;
var useSymbols; 
var numbers= "0123456789";
var lowerCaseLtrs= "abcdefghijklmnopqrstuvwxyz";
var upperCaseLtrs= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols= "!@#$%^&*"

function howManyCharacters() {
  while (numOfCharacters<=7 && numOfCharacters<=129){
    numOfCharacters=prompt ("how many characters?");
  }
}

function useLowerCase () {
  allowLowerCase=confirm ("Do you want to use lower case letters?")
}

function useUpperCase () {
  allowUpperCase=confirm ("Do you want to use upper case letters?")
}

function useNumbers () {
  allowNumber=confirm ("Do you want to use Numbers?")
}
function useSymbol () {
  allowSymbol=confirm ("Do you want to use Symbols?")
}



function generatePassword() {
  howManyCharacters ();
  useLowerCase();
  useUpperCase();
  useNumbers();
  useSymbol();
  var characters="";
  var selections="";
  if(allowLowerCase==true) {
    characters+= lowerCaseLtrs;
  } 
  if(allowUpperCase==true) {
    characters+= upperCaseLtrs;
  }
  if(allowNumber==true) {
    characters+= numbers;
  }
  if(allowSymbol==true) {
    characters+= symbols;
  }
  if(allowLowerCase !=true && allowUpperCase !=true && allowNumber!=true && allowSymbol !=true) {
    window.alert("You need to select at least one option.");
    return generatePassword();
  }
  // debug tool
  // console.log("characterlength",numOfCharacters);
  // console.log("characterlength", characters);
  
  for(let x=0; x< numOfCharacters; x++ ) {
    var results= Math.floor(Math.random()*characters.length);
    selections+=characters[results];
  }
  numOfCharacters=0;
  return selections;
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);