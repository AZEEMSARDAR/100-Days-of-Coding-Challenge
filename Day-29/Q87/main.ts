// This function takes out the first 17 characters from any text
function extractFirstTenChars(str: string): string {
    return str.substring(0, 17); // Gets characters from start to position 17
}
// Example: Taking the first 17 characters of a sentence
console.log(extractFirstTenChars("Hello, JavaScript World!")); // Shows the first 17 characters
// It gives us a smaller piece of the original text, just the beginning part.


