'use strict'

class Calculator {

  constructor () {

    this.pi = 22/7;
    this.result = 0;

  }

  add (num) {

    this.result += num;

    return this;

  }

  substract (num) {

    this.result -= num;

    return this;

  }

  multiply (num) {

    this.result *= num;

    return this;

  }

  divide (num) {

    this.result /= num;

    return this;

  }

  square () {

    this.result = Math.pow(this.result, 2);

    return this;

  }

  pow(num) {

    this.result = Math.pow(this.result, num);

    return this;

  }

  squareRoot () {

    this.result = Math.sqrt(this.result);

    return this;

  }

  printResult() {

    console.log(this.result);

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
