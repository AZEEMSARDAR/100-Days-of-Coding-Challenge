"use strict";
// Traditional function expression
const traditionalFunction = function (a, b) {
    return a + b;
};
// Converted to arrow function
const arrowFunction = (a, b) => a + b;
console.log(traditionalFunction(4, 2)); // Outputs: 6
console.log(arrowFunction(4, 2)); // Outputs: 6
// Demonstrates the conversion of a traditional function expression to an arrow function.
