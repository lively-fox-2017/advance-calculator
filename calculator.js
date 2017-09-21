'use strict'

class Calculator {
  //write your code here
  constructor(angka1, angka2) {
    this.angka1 = angka1;
    this.angka2 = angka2;
    const pi = 3.14;
  }
  add() {
    this.hasil = this.angka1 + this.angka2;
    return this
  }
  substract() {
    this.hasil = this.angka1 - this.angka2;
    return this
  }
  multiply() {
    this.hasil = this.angka1 * this.angka2;
    return this
  }
  divide() {
    this.hasil = this.angka1 / this.angka2;
    return this
  }
  square() {
    this.hasil = Math.pow(this.angka1, this.angka2);
    return this
  }
  squareRoot() {
    this.hasil = Math.sqrt(this.angka1);
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

module.exports = {
  Calculator
}