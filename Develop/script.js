// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//prompt for all selections on click
  var length = 0;  
while (length < 8 || length > 128) {
   var length = prompt("How long? 8-128");
   if (length < 8 || length > 128) {
     alert("You must choose a length between 8-128!");
   }
}
  var charTypes = prompt("which character types would you like? lowercase, uppercase, numeric, special?");

  passwordText.value = password;

}

function generatePassword(password) {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
