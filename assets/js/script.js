//DOM Variables
var password = document.getElementById('password');
var generate = document.getElementById('generate');

//generate button

//Character Arrays
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","+","`","~","-","=","[","]","{","}","|",";",":",",",".","/","<",">","?"];


//Variables
var confirmLength = "";
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecChar;

//password generator function
function generatePassword(){
    //Prompt to confirm number of characters
    var confirmLength = (window.prompt("How long would you like your password to be?  Choose a number between 8 and 128!"));
        //Loop if 8 > answer > 128
        while(confirmLength < 8 || confirmLength > 128) {
            alert("Please choose a number between 8 and 128!");
            var confirmLength = (window.prompt("How long would you like your password to be?  Choose a number between 8 and 128!"));
        };
    // Password choices
    var confirmLower = confirm("Click OK to confirm if you would like the password to include lowercase letters.");
    var confirmUpper = confirm("Click OK to confirm if you would like the password to include uppercase letters.");
    var confirmNumber = confirm("Click OK to confirm if you would like the password to include numbers.");
    var confirmSpecChar = confirm("Click OK to confirm if you would like the password to include special characters.");
    //loop if one isn't selected
    while(confirmLower === false && confirmUpper === false && confirmSpecChar === false && confirmNumber === false) {
        alert ("You must choose at least one type of character for password.");
        var confirmLower = confirm("Click OK to confirm if you would like the password to include lowercase letters.");
        var confirmUpper = confirm("Click OK to confirm if you would like the password to include uppercase letters.");
        var confirmNumber = confirm("Click OK to confirm if you would like the password to include numbers.");
        var confirmSpecChar = confirm("Click OK to confirm if you would like the password to include special characters.");
    };
};

//creates array containing all chosen characters

// combining password choices into one array

//creating random password from new array

// generate password function and put into text box
