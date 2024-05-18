// Defines a JavaScript object
const person = {
    name: "Sardar Azeem",
    age: 18,
    city: "Karachi"
};

// Converts the object into a JSON string
const jsonstring = JSON.stringify(person);
console.log(jsonstring); // Outputs: {"name":"Sardar Azeem","age":18,"city":"Karachi"}
// Demonstrates converting an object to a JSON string, making it easy to store or transmit.