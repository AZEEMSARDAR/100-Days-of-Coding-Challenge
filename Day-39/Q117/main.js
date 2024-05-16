"use strict";
// This function evaluates a grade and logs the corresponding remark
function evaluateGrades(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Fair");
            break;
        case "D":
            console.log("Fail");
            break;
        default:
            console.log("Invali grade");
            break;
    }
}
evaluateGrades("A"); // Outputs: Excellent
// Uses a switch statement to evaluate the grade and defaults to "Invalid grade" if no match is found.
