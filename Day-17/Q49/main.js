"use strict";
function myHobbies(...hobbies) {
    // loops through each hobby in the array
    hobbies.forEach(hobby => {
        // Logs a statement for each hobby.
        console.log(`I enjoy ${hobby}.`);
    });
}
// Calls the function with three hobbies
myHobbies("Reading", "Coding", "Swimming");
