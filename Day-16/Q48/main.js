"use strict";
let priceset1 = [10000, 12000, 14000];
let priceset2 = [15000, 18000, 22000];
let combined = [...priceset1, ...priceset2].sort((a, b) => a - b);
//let combined = priceset1.concat(priceset2);
console.log(combined);
