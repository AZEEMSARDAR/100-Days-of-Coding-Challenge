// This function shows every detail about an object
function logObjectProperties(obj) {
    for (let property in obj) {
        // Loops through each property in the object
        console.log(`${property}: ${obj[property]}`);
        // Shows the property name and its value
    }
}
// Using the function with a car object
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2023, color: "blue" });
export {};
// It tells us each piece of information stored about the car.
