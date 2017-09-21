'use strict'

class Calculator {
  //write your code here
  constructor(input = 0) {
    this.input = input;
    // this.pi = 3.14;
  }

  add(num) {
    this.input += num;
    return this;
  }

  substract(num) {
    this.input -= num;
    return this;
  }

  multiply(num) {
    this.input *= num;
    return this;
  }

  divide(num) {
    this.input /= num;
    return this;
  }

  square(exponent = 2) {
    this.input = Math.pow(this.input, exponent)
    return this;
  }

  squareRoot() {
    this.input = Math.sqrt(this.input);
    return this;
  }

  luasLingkaran(jariJari) {
    this.input = (Math.PI * Math.pow(jariJari, 2)).toFixed(2);
    return this;
  }

  kelilingLingkaran(jariJari) {
    this.input = ((2 * Math.PI) * jariJari).toFixed(2);
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
