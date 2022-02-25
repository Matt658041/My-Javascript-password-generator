// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {

//Declaring arrays 
var numbArray= [`1`,`2`, `3`,`4`, `5`, `6`, `7`,`8`,`9`];
var characterArray =  [`!`, `%`, `&`, `,`, `*`, `+`, `-`, `.`, `/`, `<`, `>`, `?`,`~`,`@`,`#`,`^`,`{}`,`()`];
var lowercaseArray = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];
var uppercaseArray = [`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`];

var resultArray = [];
var userArray = [];

uppercaseArray [1]
//-----------------------------------------------------------------
  var numCharacter = prompt ("How many characters would you like, with the characters being between 8 and 128?");
  var numbers = confirm ("Would you like numbers in your password?");
  var uppercases = confirm ("Would youu like Uppercases in your password?");
  var lowercases = confirm ("Would you like lowercases in your password?");
  var characters = confirm ("Would you like special characters in your password?");


// condition of the array

if (numbers){
  resultArray = resultArray.concat(numbArray);
  
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);

}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);

}

if (characters){
  resultArray = resultArray.concat(characterArray);
}
console.log(resultArray)


for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // copyBtn.removeAttribute("disabled");
  // copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);













