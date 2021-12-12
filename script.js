// Assignment code here
// Main function to generate a password, calls helper functions and returns password
var generatePassword = function() {
  // gets number of characters desired
  let length = getLength();
  // get the list of all characters to include in password
  let charSet = confirmSets();
  // initializes an empty string to add the randomly generated passwords to
  let generated = ''
  // goes through the string of characters and pulls characters at random
  for(let i = 0; i < length; i++) {
    randomIndex = Math.floor(Math.random() * charSet.length);
    generated += charSet[randomIndex];
  }
  // returns the randomly generated password
  return generated;
}

// gets the number of characters to use for the password
var getLength = function() {
  // prompts the user for a number between 8 and 128, parses to number
  var lengthInput = parseInt(window.prompt('How many characters in your password? (Must be a number between 8 and 128)'));
  // if the input is an acceptable lenth, returns that input
  if (lengthInput > 7 && lengthInput < 129) {
    return lengthInput;
  }
  // if input was out of the acceptable range, prompts again
  else {
    return getLength();
  }
}

// prompts user whether or not to include certain sets of characters and handles their response
var confirmSets = function() {
  // initialize an empty string to store all chosen characters
  let allowedCharacters = ''
  // prompts user whether or not to include lowercase characters
  let lowercase = window.confirm('Press okay to include lowercase letters.');
  // if user presses okay, adds all lowercase letters to the string of chosen characters
  if (lowercase) {
    allowedCharacters += 'abcdefghijklmnopqrstuvwxyz';
  }
  // prompts user whether or not to include uppercase characters
  let uppercase = window.confirm('Press okay to include uppercase letters.');
  // if user presses okay, adds all uppercase letters to the string of chosen characters
  if (uppercase) {
    allowedCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  // prompts user whether or not to include numbers
  let numbers = window.confirm('Press okay to include numbers.');
  // if user presses okay, adds all digits to the string of chosen characters
  if (numbers) {
    allowedCharacters += '0123456789';
  }
  // prompts user whether or not to include special characters
  let specialCharacters = window.confirm('Press okay to include special characters');
  // if user presses okay, adds all special characters to the string of chosen characters
  if (specialCharacters) {
    allowedCharacters += ` !"#$%&'()*+,-./:;<=>?@[\]^_{|}~` + '`';
  }
  // if the user has pressed cancel on all character sets they are alerted that they must include at least one set of characters to include in their password
  if (!allowedCharacters) {
    window.alert('You must select at least one character set to include in your password.')
    return confirmSets();
  }
  // returns the entire list of characters to include in password
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
