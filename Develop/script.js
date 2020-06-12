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
//choices as boolean values, confirmed by confirm function
  var choices = {"lowercase" : false,
                 "uppercase" : false,
                "numeric" : false,
               "special" : false};
  var choiceKeys = choices.keys;
  var chartypes = "";
  alert("Please choose from the following character types to include in your password:");
  for (i = 0; i < choices.length; i++) {
    var wanted = confirm("Do you want to include " + choices[i] + "?");
    choices[choiceKeys[i]] = wanted;
    console.log(choices[i] " : " choices[choiceKeys[i]];)
  }

  passwordText.value = password;

}

function generatePassword(password) {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
