// Answer of Q112
// Create a Map to store countries and their capitals
let countryCapitalMap: Map<string, string> = new Map();

// Add countries and capitals to the Map
countryCapitalMap.set("United States", "Washington D.C.");
countryCapitalMap.set("United Kingdom", "London");
countryCapitalMap.set("France", "Paris");

// Accessing values from the Map
console.log("Capital of United States:", countryCapitalMap.get("United States"));
console.log("Capital of United Kingdom:", countryCapitalMap.get("United Kingdom"));
console.log("Capital of France:", countryCapitalMap.get("France"));


// Answer of Q113
// This function checks for "Canada" in the Map and logs its capital
function logCapitalOfCanada(countries: Map<string, string>): void {
    if (countries.has("Canada")) {
        console.log(`The capital of canada is ${countries.get("Canada")}`);
    } else {
        console.log("Canada is not in this Map.");
    }
}

// Assuming countries Map from Question 112
logCapitalOfCanada(countryCapitalMap);
// Checks if Canada is in our Map and logs the capital if it exists.