"use strict";
// Demonstrating block scope
{
    let blockLet = "visible inside the block";
    const blockConst = "also visible inside the block";
    console.log(blockLet); // Works fine here
    console.log(blockConst); //Also works fine here
}
try {
    console.log(blockLet); // This will fail
}
catch (error) {
    console.log("`blockLet is not accessible outside the block.");
}
try {
    console.log(blockConst); //Cannot find name 'blockConst'.
}
catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
// This shows that `let` and `const` keep variables safe inside the block where they're defined.
