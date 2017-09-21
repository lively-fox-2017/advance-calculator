'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let calculate = new Calculator(5);
let calculate2 = new Calculator(5);

console.log(calculate.add(15).substract(5).multiply(10).divide(30).square(4));
console.log(calculate2.add(15).substract(5).multiply(10).divide(30).square(4).squareRoot());
