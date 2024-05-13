// This function changes a string into a number
function convertStringToNumber(str: string): number {
    return parseFloat(str); // Converts the string to a number
}
// Example: Turning a numeric string into a real number
console.log(convertStringToNumber("150.45")); // Outputs: 150.45
console.log(convertStringToNumber("55")); // Outputs: 55
// We're taking strings that look like numbers and turning them into actual numbers.