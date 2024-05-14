"use strict";
// This function filters an array, keeping only numbers greater than 10
function filterGreaterThanTen(numbers) {
    return numbers.filter(number => number > 10);
}
// Example: Filtering an array of numbers
const numbers = [5, 10, 20, 30, 40];
console.log(filterGreaterThanTen(numbers)); // Outputs: [ 20, 30, 40 ]
// The new array contains only the numbers that are greater than 10.
