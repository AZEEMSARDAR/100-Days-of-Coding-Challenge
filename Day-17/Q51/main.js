"use strict";
// Original function for calculating the area of a rectangle
function calculateArea(widht, height) {
    return widht * height;
}
// Refactored into an arrow function 
let calculateAreaArrow = (width, height) => width * height;
// Example usage of the arrow function
console.log(calculateAreaArrow(20, 50)); // Logs the area of the rectangle
