'use strict'

class Calculator {
  //write your code here
  constructor (angka) {
    this.angka = angka
  }

  add (num1) {
    this.angka += num1
    return this
  }

  substract (num2) {
    this.angka -= num2
    return this
  }

  multiply (num3) {
    this.angka *= num3
    return this
  }

  divide (num4) {
    this.angka /= num4
    return this
  }

  square (num5) {
    this.angka = Math.pow(this.angka, num5)
    return this
  }

  squareRoot (num6) {
    this.angka = Math.sqrt(this.angka)
    return this
  }

  consPi (num7) {
    this.angka = Math.PI * (num7 + num7)
    return this
  }

  print () {
    console.log(this.angka)
  }

}

let cal = new Calculator(4)
cal.consPi(4).print()


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
