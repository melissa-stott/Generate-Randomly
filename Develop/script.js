// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerArr = "abcdefghijklmnopqrstuvwxyz";
var upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberArr = "0123456789";
var specArr = "!@#$%^&*\"\()\\\'"

console.log("this is my arrays " + lowerArr + upperArr + numberArr + specArr)


function generatePassword(length, characters){
  var results = "";
  var charLen = characters.length;
  for (var i = 0; i < length; i++){
    var position = Math.floor(Math.random() * charLen);
    results += characters.charAt(position);
  }
  return results;
}

console.log(generatePassword(12, lowerArr + numberArr + specArr));

// Write password to the #password input
function writePassword() {
  var length = prompt("Enter password length");
  if(length < 8 || length > 128){
    return ('Please choose a value between 8 & 128')
  }
  var password = generatePassword(length, lowerArr);


  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// wrvar result = charArr += specArr.charAt(Math.floor(Math.random() * 10))

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
