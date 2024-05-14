"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day); // months are 0 indexed
    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
// Replace with your birth month and day
const nexBirthday = getNextBirthday(4, 9); // Example: 9th April
console.log("Next birthday on:", nexBirthday.toLocaleDateString());
// Shows the date of the next birthday.
