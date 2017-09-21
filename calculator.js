'use strict'

class Calculator {
  //write your code here
  constructor (angka) {
    this.angka = angka
  }
  add (input) {
    this.angka = this.angka + input
    return this
  }
  substract (input) {
    this.angka = this.angka - input
    return this
  }
  multiply (input) {
    this.angka = this.angka * input
    return this
  }
  divide (input) {
    this.angka = this.angka / input
    return this
  }
  square (input) {
    this.angka = Math.pow(this.angka, input)
    return this
  }
  squareRoot () {
    this.angka = Math.sqrt(this.angka)
    return this
  }
  konstantaPi () {
    this.angka = Math.PI*(Math.pow(this.angka,2))
    return this
  }
}

let Hitung = new Calculator(5)
console.log(Hitung.add(6).substract(4).multiply(2).divide(2).square(2).squareRoot());
console.log(Hitung.konstantaPi()); 
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = {
  Calculator
}
