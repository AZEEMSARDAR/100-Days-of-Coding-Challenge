let grades = [90, 88, 86, 94, 92, 55, 45, 73, 77];


// Calculates the average grade.
let averagegrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;

// Shows the average grade.
console.log(averagegrade);
