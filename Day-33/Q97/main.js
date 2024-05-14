"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This function formats the current date as DD-MM-YYY 
function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0'); // Ensures the day is two digits
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Adds 1 because months are 0-indexed
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
}
const currentDate = getCurrentDate();
console.log(currentDate); // Outputs the current date in DD-MM-YYYY format
// Shows today's date, neatly formatted.
