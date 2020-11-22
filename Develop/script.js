// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(length, characters){
  var results = "";
  var charLen = characters.length;
  for (var i = 0; i < length; i++){
    var position = Math.floor(Math.random() * charLen);
    results += characters.charAt(position);
  }
  return results;
}

// Write password to the #password input
function writePassword() {

  var lowerArr = "abcdefghijklmnopqrstuvwxyz";
  var upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberArr = "0123456789";
  var specArr = "!@#$%^&*\"\()\\\'"

  var length = prompt("Enter password length");
  if(length < 8 || length > 128){
    alert ('Please choose a value between 8 & 128');
    return;
  }
  
  var charList = "";
  if(confirm("Do you want to include lower case letters?")){
    charList += lowerArr;
  }

  if(confirm("Do you want to include upper case letters?")){
    charList += upperArr;
  }

  if(confirm("Do you want to include numbers?")){
    charList += numberArr;
  }

  if(confirm("Do you want to include special characters?")){
    charList += specArr;
  }

  var password = generatePassword(length, charList);


  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// wrvar result = charArr += specArr.charAt(Math.floor(Math.random() * 10))

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
