'use strict'

class Calculator {
  //write your code here
  constructor(init = 0) {
    this.number = init;
    this.PIVAL = Math.PI;
  }
  // Constanta PI
  get PI() {
    return Math.PI;
  }
  add(num) {
    this.number += num;
    return this;
  }
  substract(num) {
    this.number -= num;
    return this;
  }
  multiply(num) {
    this.number *= num;
    return this;
  }
  divide(num) {
    this.number /= num;
    return this;
  }
  square() {
    this.number = Math.pow(this.number, 2);
    return this;
  }
  power(num) {
    this.number = Math.pow(this.number, num);
    return this;
  }
  squareRoot() {
    this.number = Math.sqrt(this.number);
    return this;
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
