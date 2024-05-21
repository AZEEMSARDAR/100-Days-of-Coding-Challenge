// This function accepts a callback function and invokes it with given arguments
function executeCallBAck (callback: (arg1: number, arg2: number)=> void,
arg1: number,
arg2: number
): void {
    callback(arg1,arg2); // Invokes the callback with the specified arguments
}

// Example callback function that adds two numbers
const add = (a: number, b: number) => {
    console.log(a + b); // Outputs the sum of a and b
}

executeCallBAck(add, 6,2); // Outputs: 8
// Demonstrates invoking a callback function with arguments to perform an addition.
