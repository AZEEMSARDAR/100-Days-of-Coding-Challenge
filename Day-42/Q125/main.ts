const rectangle = {
    length: 5,
    width: 4,
    calculateArea: function() {
        return this.length * this.width; // 'this' accesses 'length' and 'width' properties of the object
    },
};

console.log(rectangle.calculateArea()); // Outputs: 20
// The 'calculateArea' method uses 'this' to compute the area based on the object's own dimensions.
