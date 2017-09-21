'use strict'

class Calculator {
  //write your code here
  constructor (answer) {
    this.answer = answer;
  }

  add (num) {
    this.answer += num;
    return this;
  }

  substract (num) {
    this.answer -= num;
    return this;
  }

  multiply (num) {
    this.answer *= num;
    return this;
  }

  divide (num) {
    this.answer /= num;
    return this;
  }

  square (num) {
    this.answer = Math.pow(this.answer, num);
    return this;
  }

  squareRoot (num) {
    this.answer = Math.sqrt(this.answer, 0.5);
    return this;
  }

  circle (num) {
    this.answer = num * 3.14;
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

module.exports = Calculator;
