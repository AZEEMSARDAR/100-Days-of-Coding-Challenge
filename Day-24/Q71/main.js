"use strict";
// Using `let` for a variable that can be reassigned
let age = 18;
age = 19; // Works fine because `let` allows reassignment
console.log(age); // Shows 19
// Trying to reassign a `const`-declared variable
const name = "Azeem";
try {
    name = "Bob"; // This line will cause an error
}
catch (error) {
    console.log("Error: Cannot assign to 'name' because it is a constant"); // This message is shown
}
// This example illustrates that `const` prevents changing the variable once it's set.
