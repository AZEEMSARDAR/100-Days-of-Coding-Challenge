"use strict";
const rectangle = {
    length: 5,
    width: 4,
    calculateArea: function () {
        return this.length * this.width; // 'this' accesses 'length' and 'width' properties of the object
    },
};
console.log(rectangle.calculateArea());
