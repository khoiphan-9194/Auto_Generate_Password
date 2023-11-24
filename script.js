// Assignment Code
var generateBtn = document.querySelector("#generate");

/*
What is a const in JavaScript?
In JavaScript, const is a keyword used to declare a variable that cannot be reassigned a new value. 
It is similar to let , but the value of a const variable cannot be changed once it has been declared.
*/
// object key_strings will store password requirements
const key_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
 };
//this.prompt(key_strings.lowercase.length + "" +key_strings.number.length);
 

var passlength; // this will store a password length


//set up the length for the passwork from at least 8 to 128 characters
function passwordLength()
{

  passlength = this.prompt("Please Choose how many characters long you'd like for your password\nBetween 8-128 characters");
  // while loop will keep asking the user enter the right value when prompted
  while(passlength<8 || passlength>128 || isNaN(passlength))
  {
   
    passlength = prompt("Incorrect value entered, please enter a number between 8 to 128 !");  

  }

  alert("Great! Your password will be: " + passlength + " characters long.");  
  return passlength;

}


// this generatePassword function will create a password

function generatePassword()
{
  var passwordCharSet = ""; // this var will hold all the character from the object key_strings based on user chose
  var lowercase;
  var uppercase;
  var symbols;
  var numbers;
  var generated_Password="";


  // this will ask user if they want to generate a password, otherwise it will close.
  var confirm = window.confirm("Welcome to the Password Generator\n press ok to continue."); 
  if(confirm)
 {
  passwordLength(); //function call to set up the length of the password and it will store in passlength

  lowercase = window.confirm("Woud you like to include lowercase letters?") // user can choose yes or no by window.confirm
    if(lowercase)
      {
        passwordCharSet = passwordCharSet.concat(key_strings.lowercase);
        console.log("Lower "+ passwordCharSet); //keep track of value in passwordCharSet;
      };

  uppercase = window.confirm("Woud you like to include uppercase letters?") // user can choose yes or no by window.confirm
    if(uppercase)
      {
        passwordCharSet = passwordCharSet.concat(key_strings.uppercase);
        console.log("Upper "+ passwordCharSet); //keep track of value in passwordCharSet;
      };


  numbers = window.confirm("Woud you like to include numbers?") // user can choose yes or no by window.confirm
  if(numbers)
      {
        passwordCharSet = passwordCharSet.concat(key_strings.number);
        console.log("Numbers "+ passwordCharSet); //keep track of value in passwordCharSet;
      };


  symbols = window.confirm("Woud you like to include special characters?") // user can choose yes or no by window.confirm
  if(symbols)
      {
        passwordCharSet = passwordCharSet.concat(key_strings.symbol);
        console.log("Symbols "+ passwordCharSet); //keep track of value in passwordCharSet;
      };


    for (let index = 0; index < passlength; index++) {
     generated_Password += passwordCharSet.charAt(Math.floor(Math.random()*passwordCharSet.length));
      
    }
  
       return generated_Password;
 }
    else //
    {
      window.close();
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
