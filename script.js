// Assignment code here
 
//Objects
var keys =  {
  upperCase: `ZXCVBNMLKJHGFDSAQWERTYUIOP`,
  lowerCase: `zxcvbnmasdfghjklqwertyuiop`,
  number: `0123456789`,
  symbol: `!@#$%^&*()_+<>?:"{}[]`
}
//Generate a random Number
var getKey = [
  function uppercase() {
    return keys.upperCase[Math.floor(Math.random()* keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.upperCase[Math.floor(Math.random()* keys.lowerCase.length)];
  },
  function number() {
    return keys.upperCase[Math.floor(Math.random()* keys.number.length)];
  },
  function symbol() {
    return keys.upperCase[Math.floor(Math.random()* keys.symbol.length)];
  },

];



var generatePassword = function()  {
// Present prompts for password criteria
  var promptPassword = window.alert(`Your password should be a length of between 8 and 128 characters.`);
  var promptPassword = window.alert (`You can choose from many character types`);  
  var promptPassword = window.alert(`Your password can include uppercase, lowercase, numeric values, or special characters.`);
  //Select lenght of password
  
   var passwordLength =  window.prompt(`Please select the length of your password in numeric values.`);
   if (passwordLength){

   }else {

   }
  

   
  // Ask for character types
 var characterTypes = window.prompt(`Please choose numbers,letters, or symbols to include in password.`);
  if(characterTypes){

  } else {

  } 
  // convert promptPassword to all lower case
  promptPassword = promptPassword.toLowercase(); 

  //Generate password
  window.prompt(`Generate password`);
  
  for (var i = 0; i < getKey.length; i++){

  }
  
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);