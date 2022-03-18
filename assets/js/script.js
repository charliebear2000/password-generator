// Assignment code here


// prompt for length of password between 8 and 128 characters
// validate prompt

// do you want lowercase letters
// validate prompt

// do you want uppercase letters
// validate prompt

// do you want numbers
// validate prompt

// do you want special characters
// validate prompt

// generate password

// display password


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


/* RUN GAME */
generatePassword();