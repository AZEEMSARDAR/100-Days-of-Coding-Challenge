// This function checks if a value is Not a Number (NaN)
function isValueNaN(value: any): boolean {
    return isNaN(value); // Checks and returns true if the value is NaN, false otherwise
}
console.log(isValueNaN("Hello Azeem")); // Outputs: true, because "Hello Azeem" isn't a number
console.log(isValueNaN(786)); // Outputs: false, because 786 is a number
// This way, we can guard against unexpected non-numeric values in our calculations or inputs.
