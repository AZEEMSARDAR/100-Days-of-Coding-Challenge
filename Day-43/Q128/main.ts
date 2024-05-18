// Arrow function that calculates the product of all its parameters
const multiply = (...numbers : number[]) => numbers.reduce((total, number) => total * number, 1);

console.log(multiply(2,4,6));
