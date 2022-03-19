
// prompt for length of password between 8 and 128 characters

var generatePassword = function() {
  var passwordLength = window.prompt("Your password needs to be 8 - 128 characters long. How long do you want your password? ");
  // kick them back to prompt if the answer is not between 8 and 128.
  if (passwordLength < 8 || passwordLength > 128) {
    return generatePassword();

  } else {
    // validate prompt
    window.alert("Your password will be " + passwordLength + " characters long.");
    lowercaseLetters();
  }
}
    
  // do you want lowercase letters
  var lowercaseLetters = function() {
    var lowercase = window.prompt('Do you want to include lowercase letters? Type "YES" or "NO".');
    console.log(lowercase);
    //convert lowercase to all lowercase letters
    
      // validate prompt
      if (lowercase === "" || lowercase === null) {
        window.alert("You need to provide a valid answer.");
        return lowercaseLetters();
      } 
      
      lowercase = lowercase.toLowerCase();

      if (lowercase === "yes") {
        window.alert("You DO want to include lowercase letters.");

      } else if (lowercase === "no") {
        window.alert("You DO NOT want to include lowercase letters");

      } else {
        return lowercaseLetters();
      }
    }

  // do you want uppercase letters
  window.prompt("Do you want to include uppercase letters? Type YES or NO.");
  // validate prompt

  // do you want numbers
  window.prompt("Do you want to include numbers? Type YES or NO.");
  // validate prompt

  // do you want special characters
  window.prompt("Do you want to include special characters? Type YES or NO.");
  // validate prompt

// generate password

// display password


// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


/* RUN GAME */
generatePassword();

