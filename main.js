'use strict'

const {Calculator} = require("./calculator.js")

let hitung = new Calculator(16, 2);
console.log(hitung.substract().add().hasil);
