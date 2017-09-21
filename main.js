'use strict'

const Calculator = require('./calculator.js');

// execute function on calculator.js in here

// result(){
//   console.log('Result is :' this.input)
// }

let hitung = new Calculator(0);
let lingkaran = new Calculator(0);

hitung.add(2).add(4).substract(3).multiply(3).squareRoot(3).square(2).divide(3);
lingkaran.circle(3);
console.log('Result', hitung);
console.log('Result', lingkaran);
