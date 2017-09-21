'use strict'

class Calculator {
  //write your code here
  constructor (angka) {
    this.angka = angka
  }
  add (num) {
    this.angka = this.angka + num
    return this
  }
  substract (num) {
    this.angka = this.angka - num
    return this
  }
  multiply (num) {
    this.angka = this.angka * num
    return this
  }
  divide (num) {
    this.angka = this.angka / num
    return this
  }
  square (num) {
    this.angka = Math.pow(this.angka,num)
    return this
  }
  squareRoot () {
    this.angka = Math.sqrt(this.angka)
    return this
  }
  circle() {
    this.angka = (Math.PI * (this.angka + this.angka)).toFixed(2)
    return this
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let calculator = new Calculator(5)
console.log(calculator.circle());


module.exports = {
  Calculator
}
