'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here

let calc = new Calculator();
let calculation = calc
					.add(2)
					.substract(1)
					.multiply(11)
					.divide(2)
					.square()
					.squareRoot()
					.circleCircumference()
					.circleArea()
					.result;

console.log('Calculating .add(2).substract(1).multiply(11).divide(2).square().squareRoot().circleCircumference().circleArea()')
console.log('Result:', calculation);