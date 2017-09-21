'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let angka1 = new Calculator();
// console.log(test.add(2));
// console.log(test.substract(8));
// console.log(test.multiply(2));
// console.log(test.divide(4));
// console.log(test.square(4));
// console.log(test.squareRoot());
console.log(angka1.add(18).substract(8).multiply(2).divide(4).square(4).squareRoot());

let lingkaran1 = new Calculator();
console.log(lingkaran1.kelilingLingkaran(7));

let lingkaran2 = new Calculator();
console.log(lingkaran2.luasLingkaran(7));
