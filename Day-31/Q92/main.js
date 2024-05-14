"use strict";
// This function removes the last element from an array and returns it
function removeLastElement(arr) {
    // Pop the last element from the array and return it
    return arr.pop();
}
// Example: Removing the last fruit from the array
const fruits = ["Apple", "Kiwi", "Mango"];
console.log(removeLastElement(fruits)); // Outputs: 'Mango'
console.log(fruits); // Outputs: ['Apple', 'Kiwi']
// Here, we take out the last fruit and show the updated list
