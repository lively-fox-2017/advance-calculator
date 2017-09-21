'use strict'

class Calculator {

  constructor (result = 1) {

    this.result = result;

  }

  piValue() {

    return 22/7;

  }

  add (num = 1) {

    this.result += num;

    return this;

  }

  substract (num = 1) {

    this.result -= num;

    return this;

  }

  multiply (num = 1) {

    this.result *= num;

    return this;

  }

  divide (num = 1) {

    this.result /= num;

    return this;

  }

  square () {

    this.result = Math.pow(this.result, 2);

    return this;

  }

  pow(num = 1) {

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
