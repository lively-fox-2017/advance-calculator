"use strict"

const Calculator = require('./calculator.js')

var cal = new Calculator()

cal.add(2).add(2).squareRoot()
console.log(cal.result)

//console.log(cal.result());
// execute function on calculator.js in here
