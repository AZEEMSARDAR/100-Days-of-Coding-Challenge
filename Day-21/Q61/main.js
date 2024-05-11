"use strict";
// Making a list (enum) for different types of vehicles
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["car"] = 0] = "car";
    vehicleType[vehicleType["Truck"] = 1] = "Truck";
    vehicleType[vehicleType["Motorcycle"] = 2] = "Motorcycle";
})(vehicleType || (vehicleType = {}));
// Showing one type of vehicle from the list
console.log(vehicleType.car); // It shows 0 because enums start counting from 0
// Here, we're just checking what number the Car category got in our list.
