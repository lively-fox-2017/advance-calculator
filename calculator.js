'use strict'

class Calculator {
  //write your code here
  constructor (input) {
    this.result = input;
  }
  add (input2) {
    this.result += input2;
    return this;
  }
  substract (input2) {
    this.result -= input2;
    return this;
  }
  multiply (input2) {
    this.result *= input2;
    return this;
  }
  divide (input2) {
    this.result /= input2;
    return this;
  }
  square (input2) {
    this.result = Math.pow(this.result, input2);
    return this;
  }
  squareRoot () {
    this.result = Math.sqrt(this.result);
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
