'use strict'

const {Calculator} = require("./calculator.js");

// execute function on calculator.js in here
let calculator = new Calculator();

calculator.add(5).substract(3).multiply(2).divide(2).square(4).squareRoot();
console.log(calculator);
console.log(calculator.getPI());
console.log(calculator.getNum());
console.log(calculator.luasLingkaran(4)); // Input jari - jari
console.log(calculator.kelilingLingkaran(4)); // Input jari - jari