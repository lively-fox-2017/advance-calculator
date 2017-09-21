'use strict'

class Calculator {
  //write your code here
  constructor (angka = 0) {
    this.hasil = angka
    this.pi = 3.14
  }
  add (angka) {
    this.hasil = this.hasil + angka
    return this
  }
  substract (angka) {
    this.hasil = this.hasil - angka
    return this
  }
  multiply (angka) {
    this.hasil = this.hasil * angka
    return this
  }
  divide (angka) {
    this.hasil = this.hasil / angka
    return this
  }
  square (angka) {
    this.hasil = Math.pow(this.hasil, angka)
    return this
  }
  squareRoot (angka) {
    this.hasil = Math.pow(this.hasil, 1/angka)
    return this
  }
}

var hitung1 = new Calculator()
var lingkaran = new Calculator(10)
console.log(hitung1.add(2).multiply(4).substract(2).divide(2).square(4).squareRoot(4).hasil)

console.log(lingkaran.pi * lingkaran.square(2).hasil);

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
