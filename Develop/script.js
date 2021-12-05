// Assignment code here
var length;
var lowercase;
var uppercase;
var numbers;
var specialCharacters;

var generatePassword = function() {
  length = getLength();
  lowercase = window.confirm('Press okay to include lowercase letters.');
  uppercase = window.confirm('Press okay to include uppercase letters.');
  numbers = window.confirm('Press okay to include numbers.');
  specialCharacters = window.confirm('Press okay to include special characters');
}

var getLength = function() {
  var lengthInput = parseInt(window.prompt('How many characters in your password? (Must be a number between 8 and 128)'));
  if (lengthInput > 7 && lengthInput < 129) {
    return lengthInput;
  }
  else {
    return getLength();
  }
}




















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
