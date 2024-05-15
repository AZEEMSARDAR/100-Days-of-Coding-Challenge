// This function generates a random hexadecimal color code
function getRandomHexColor(): string {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0'); // Generate random hexadecimal color code
    return color; // Returns the random color code
}

console.log(getRandomHexColor()); // Outputs a random hex color code like 
// We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long.
