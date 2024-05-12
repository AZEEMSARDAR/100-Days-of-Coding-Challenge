// Define the type of the car object
interface Car {
    make: string;
    model: string;
    year: number;
    color?: string 
}

// Starting with our car object
let car: Car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
}

// Adding a new property 'color' and updating 'year'
car.color = "Blue"; // Adds a new property 'color
car.year = 2023; // Updates the 'year' property

 // Showing the updated car object
console.log(car); // Outputs the car object with the new color and updated year
// Now our car is blue and its model year is updated to 2023.

