// Assignment code here
 
//Generate a random Number
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};
//Object Array
var newPassword = [ {
  name: `809921GL!`,
  randomPassword: randomNumber(8,128)
}, 
{
  name: `76887987989A`,
  randomPassword: randomNumber(8,128)
}
];

var generatePassword = function()  {
// Present prompts for password criteria
  var promptPassword = window.alert(`Your password should be a lenght of between 8 and 128 characters.`);
  window.alert (`You can choose from many character types`);  
  window.alert(`Your password can include uppercase, lowercase, numeric values, or special characters.`);

  
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