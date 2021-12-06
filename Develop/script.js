// Assignment code here
var generatePassword = function() {
  let length = getLength();
  let charSet = confirmSets();
  let generated = ''
  for(let i = 0; i < length; i++) {
    randomIndex = Math.floor(Math.random() * charSet.length);
    generated += charSet[randomIndex];
  }
  return generated;
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

var confirmSets = function() {
  let allowedCharacters = ''
  let lowercase = window.confirm('Press okay to include lowercase letters.');
  if (lowercase) {
    allowedCharacters += 'abcdefghijklmnopqrstuvwxyz';
  }

  let uppercase = window.confirm('Press okay to include uppercase letters.');
  if (uppercase) {
    allowedCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  let numbers = window.confirm('Press okay to include numbers.');
  if (numbers) {
    allowedCharacters += '0123456789';
  }

  let specialCharacters = window.confirm('Press okay to include special characters');
  if (specialCharacters) {
    allowedCharacters += ` !"#$%&'()*+,-./:;<=>?@[\]^_{|}~` + '`';
  }
  if (!allowedCharacters) {
    window.alert('You must select at least one character set to include in your password.')
    return confirmSets();
  }
  else {
    return allowedCharacters;
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
