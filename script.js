generateBtn.addEventListener("click", writePassword);
const specialCharacters = "~!@#$%^&*()";
const generateButton = document.getElementById("generatebutton")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Your password must contain between 8-128 characters. Please input amount of characters.");
  var numbers = confirm("Do you want numbers?");
  var lowerCases = confirm("Do you want lowercase letters?");
  var upperCases = confirm("Do you want uppercase letters?");
  var specialCharacters = confirm("Do you want special characters?");

  var minimumCount = 0;
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";

  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getSpecialCharacters: function() {
      return SpecialCharacters[Math.floor(Math.random() * SpecialCharacters.length)];
    }
  };

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }
  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;
  }
  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;
  }
  if (specialCharacters === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;
  }

  var randomPasswordGenerated = "";

  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4 );
    
    randomPasswordGenerated += functionArray[randomNumberPicked]();
  }

  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumSpecialCharacters;

  return randomPasswordGenerated;
}