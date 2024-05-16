// This function categorizes a person's age group
function categorizeAge(age:number) {
    if (age < 13) {
        return "Child"
    } else if (age <= 19) {
        return "teenager";
    } else {
        return "Adult";
    }
}

console.log(categorizeAge(11)); // Outputs: child
console.log(categorizeAge(17)); // Outputs: teenager
console.log(categorizeAge(30)); // Outputs: adult
// Based on the age provided, we log the corresponding age group.