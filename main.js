const {
  Calculator
} = require("./calculator.js")

let calc = new Calculator(1);
calc.add(2).substract(1).multiply(11).divide(2).square().squareRoot();
console.log(calc.number);
console.log(calc.PI);
// execute function on calculator.js in here
