'use strict'

const {Calculator} = require("./calculator.js");

// execute function on calculator.js in here

let calc = new Calculator(0);

calc.add(2).pow(3).substract(2).divide(2);

calc.printResult();

let areaOfCircle = new Calculator(7);

areaOfCircle.square().multiply(areaOfCircle.piValue());

areaOfCircle.printResult();
