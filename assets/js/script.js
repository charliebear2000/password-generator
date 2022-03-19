var passwordLength;
var lowercase;
var uppercase;
var num1;
var character;

const lc = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const lower = lc.concat(lc, lc, lc, lc);
const uc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const upper = uc.concat(uc, uc, uc, uc);
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const numeric = num.concat(num, num, num, num, num, num, num, num, num, num, num, num);
const char = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+"]
const symbol = char.concat(char, char, char, char, char, char, char, char, char);

// prompt for length of password between 8 and 128 characters
var generatePassword = function() {
  passwordLength = window.prompt("Your password needs to be 8 - 128 characters long. How long do you want your password? ");
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
    lowercase = window.prompt('Do you want to include lowercase letters? Type "YES" or "NO".');
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
        console.log(lowercase);

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
    uppercase = window.prompt('Do you want to include uppercase letters? Type "YES" or "NO".');
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
        console.log(uppercase);

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
    num1 = window.prompt("Do you want to include numbers? Type YES or NO.");
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
        console.log(num1);

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
    character = window.prompt("Do you want to include special characters? Type YES or NO.");
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
        console.log(character);

      } else if (lowercase === "no" && uppercase === "no" && num1 === "no" && character === "no") {
        window.alert("You must choose at least one type of character.");
        lowercaseLetters();
      
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

