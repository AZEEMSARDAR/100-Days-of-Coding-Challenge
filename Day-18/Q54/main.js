"use strict";
// A way to make a flexible list
function createObjectWithDynamicKey(key, value) {
    // Provide a type annotation for dynamicObject
    let dynamicObject = {};
    // Setting up a section in the list with a changeable name.
    dynamicObject[key] = value;
    return dynamicObject;
}
// Using the flexible list setup for a user's preference
let userPreference = createObjectWithDynamicKey("theme", "dark");
// Showing the user's choice
console.log(userPreference);
