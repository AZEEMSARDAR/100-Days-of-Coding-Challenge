// This function iterates through a string and logs each character until it finds a vowel
function logUntilVowel(str: string): void {
    const vowels = "AEIOUaeiou";
    for (let char of str) {
        if (vowels.includes(char)) {
            console.log(`First vowel found ${char}`);
            break; // Stops the loop at the first vowel found
        }
        // Break out of the loop since we've found the first vowel
        console.log(char); 
    }
}

logUntilVowel("xysygy");  // Logs 's', 'y', 'z', 'y', and then 'First vowel found: y'
// Demonstrates iterating through a string and stopping at the first vowel.
