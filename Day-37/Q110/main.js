"use strict";
function assignGrade(score) {
    if (score >= 90) {
        return "A+";
    }
    else if (score >= 80) {
        return "A";
    }
    else if (score >= 70) {
        return "B";
    }
    else if (score >= 60) {
        return "C";
    }
    else if (score >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(assignGrade(92)); // Outputs: A+
console.log(assignGrade(75)); // Outputs: B
