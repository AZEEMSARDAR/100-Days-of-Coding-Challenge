"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create a Map to store countries and their capitals
let countryCapitalMap = new Map();
// Add countries and capitals to the Map
countryCapitalMap.set("United States", "Washington D.C.");
countryCapitalMap.set("United Kingdom", "London");
countryCapitalMap.set("France", "Paris");
// Accessing values from the Map
console.log("Capital of United States:", countryCapitalMap.get("United States"));
console.log("Capital of United Kingdom:", countryCapitalMap.get("United Kingdom"));
console.log("Capital of France:", countryCapitalMap.get("France"));
