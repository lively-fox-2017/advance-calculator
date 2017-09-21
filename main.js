'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let newCalculator = new Calculator()
console.log(newCalculator.add(10).add(10).multiply(1).substract(5).divide(5).multiply(3).square(2).squareRoot().circle());

let newCalculator2 = new Calculator()
console.log(newCalculator2.add(10).circle().squareRoot().divide(1).substract(10).multiply(10));
