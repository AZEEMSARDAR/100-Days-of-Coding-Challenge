// This function checks if a year is a leap year
function isLeapYear(year: number): boolean {
    // Checks the conditions for a leap year
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

console.log(isLeapYear(2000)); // Outputs: true 
console.log(isLeapYear(2009));  // Outputs: false
// By using comparison operators, we can easily determine if a year is a leap year or not.
