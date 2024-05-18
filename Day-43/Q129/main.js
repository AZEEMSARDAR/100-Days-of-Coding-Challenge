"use strict";
const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: function () {
        console.log("Arrow function:", this.value); // 'this' refers to traditionalVsArrow object
    },
};
traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
traditionalVsArrow.arrowFunction(); // Logs "traditionalVsArrow value"
