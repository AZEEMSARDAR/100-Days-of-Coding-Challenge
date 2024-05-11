"use strict";
// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(dividend, divisior) {
    // Calculates the quotient and remainder
    let quotient = Math.floor(dividend / divisior);
    // Returns both in an object
    let remainder = dividend % divisior;
    // Returns both in an object
    return { quotient, remainder };
}
// Trying it with 10 divided by 3
console.log(divideAndRemainder(10, 3)); // Shows { quotient: 3, remainder: 1 }
// It shows how many times 3 goes into 10, and what's left over.
