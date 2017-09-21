'use strict'

const {Calculator} = require("./calculator.js");

// execute function on calculator.js in here

let calc = new Calculator;

calc.add(2).pow(3).substract(2).divide(2);

calc.printResult();

let areaOfCircle = new Calculator;

areaOfCircle.add(7).square().multiply(areaOfCircle.pi);

areaOfCircle.printResult();
