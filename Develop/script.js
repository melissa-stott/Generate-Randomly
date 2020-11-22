// Assignment Code
var generateBtn = document.querySelector("#generate");

//This function gathers all user input to generate the password
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

//This function contains all password character options, and if statements to determine what will be included in the random password.
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
