// Creating a blueprint (interface) for student information
interface Student {
    name: string;
    age: number;
    courses: string[];
}
// Filling in the blueprint with an example student
let student: Student = {
    name: "Azeem",
    age: 18,
    courses: ["Math", "Physics", "Chemistry"]
}

//Showing the student's information
console.log(student);
// We're using the blueprint to make sure our student has a name, age, and list of courses.
