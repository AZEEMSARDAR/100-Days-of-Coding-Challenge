// This function formats the current date as DD-MM-YYY 
function getCurrentDate(): string {
    const today: Date = new Date();
    const day: string = String(today.getDate()).padStart(2, '0'); // Ensures the day is two digits
    const month: string = String(today.getMonth() + 1).padStart(2, '0'); // Adds 1 because months are 0-indexed
    const year: number = today.getFullYear();

    return `${day}-${month}-${year}`;
}

const currentDate: string = getCurrentDate();
console.log(currentDate);  // Outputs the current date in DD-MM-YYYY format
// Shows today's date, neatly formatted.
