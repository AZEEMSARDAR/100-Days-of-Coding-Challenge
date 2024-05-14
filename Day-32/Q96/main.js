"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This function calculates the sum of all numbers in an array
function calculateSum(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
// Example: Calculating the sum of an array of numbers
const number = [2, 4, 6, 8];
console.log(calculateSum(number)); // Outputs: 20
// It adds up all the numbers in the array, resulting in a single sum value.
