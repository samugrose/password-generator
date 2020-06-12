// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword(password) {
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
  var dictator = [];  //for included choices by user
  alert("Please choose from the following character types to include in your password:");
  for (var key in choices) {
    var wanted = confirm("Do you want to include " + key + "?");
    choices[key] = wanted;
    if (wanted === true) {
      dictator.push(key);
    }
    console.log(dictator); 
  } //dictator loaded up, now to choose some chars
  //choose random number and random selection from there to include
    var pw = "";
    var lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var uppercase = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    var special = '~!@#$%^&*()_'.split('');
    var numeric = '0123456789'.split('');
    console.log(lc + " " +  uc + " " + sc + " " + num);
  for (i = 0; i < length; i++) { //generate random characters, return value
    dictator[randomInt(dictator.length)]
  }
}

function randomInt(value) { //produces random int between 0 and value
  Math.floor(Math.random() * value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
