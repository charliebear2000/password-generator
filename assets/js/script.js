
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
    
      // validate prompt
      if (lowercase === "" || lowercase === null) {
        window.alert("You need to provide a valid answer.");
        return lowercaseLetters();
      } 
      //convert lowercase to all lowercase letters
      lowercase = lowercase.toLowerCase();

      if (lowercase === "yes") {
        window.alert("You DO want to include lowercase letters.");

      } else if (lowercase === "no") {
        window.alert("You DO NOT want to include lowercase letters.");

      } else {
        window.alert("You need to provide a valid answer.");
        return lowercaseLetters();
      }
      uppercaseLetters();
    }

  // do you want uppercase letters
  var uppercaseLetters = function() {
    var uppercase = window.prompt('Do you want to include uppercase letters? Type "YES" or "NO".');
    console.log(uppercase);
    
      // validate prompt
      if (uppercase === "" || uppercase === null) {
        window.alert("You need to provide a valid answer.");
        return uppercaseLetters();
      } 
      //convert uppercase to all lowercase letters
      uppercase = uppercase.toLowerCase();

      if (uppercase === "yes") {
        window.alert("You DO want to include uppercase letters.");

      } else if (uppercase === "no") {
        window.alert("You DO NOT want to include uppercase letters.");

      } else {
        window.alert("You need to provide a valid answer.");
        return uppercaseLetters();
      }
      number();
    }

  // do you want numbers
  var number = function() {
    var num1 = window.prompt("Do you want to include numbers? Type YES or NO.");
    console.log(num1);
    
      // validate prompt
      if (num1 === "" || num1 === null) {
        window.alert("You need to provide a valid answer.");
        return number();
      } 
      //convert uppercase to all lowercase letters
      num1 = num1.toLowerCase();

      if (num1 === "yes") {
        window.alert("You DO want to include numbers.");

      } else if (num1 === "no") {
        window.alert("You DO NOT want to include numbers.");

      } else {
        window.alert("You need to provide a valid answer.");
        return number();
      }
      SpecialCharacters();
    }
  
  // validate prompt

  // do you want special characters
  var SpecialCharacters = function() {
    var character = window.prompt("Do you want to include special characters? Type YES or NO.");
    console.log(character);
    
      // validate prompt
      if (character === "" || character === null) {
        window.alert("You need to provide a valid answer.");
        return SpecialCharacters();
      } 
      //convert uppercase to all lowercase letters
      character = character.toLowerCase();

      if (character === "yes") {
        window.alert("You DO want to include numbers.");

      } else if (character === "no") {
        window.alert("You DO NOT want to include numbers.");

      } else {
        window.alert("You need to provide a valid answer.");
        return SpecialCharacters();
      }
    }
  
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
//generatePassword();

