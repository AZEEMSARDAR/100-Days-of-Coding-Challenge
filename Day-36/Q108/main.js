"use strict";
// This function compares two strings, ignoring case sensitivity
function areStringEqualIgnoreCaseSensitive(str1, str2) {
    // Converts both strings to lowercase before comparison
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringEqualIgnoreCaseSensitive("hello", "Hello")); // Outputs: true
console.log(areStringEqualIgnoreCaseSensitive("world", "Word")); // Outputs: false
// We make both strings lowercase to ensure the comparison ignores case differences.
