"use strict";
// This function adds a number and a string that represents a number
function addNumberAndString(number1, numberString) {
    // Converts the string to a number and adds it to the first number
    return number1 + Number(numberString);
}
// Trying it with 10 and "5"
console.log(addNumberAndString(20, "5")); // Shows 25
// The string "5" is turned into the number 5, and then added to 20.
