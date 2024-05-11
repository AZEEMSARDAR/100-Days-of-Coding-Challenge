
// This program makes a function that adds a specific number
function makeAdder(valueToAdd: number): (number:number) => number {
    // This is the magic box. It takes a number and adds your special number to it
    return function(number: number): number {
        return number + valueToAdd;
    };
} 

let addFive = makeAdder(5);
console.log(addFive(10)); // Output: 15
