'use strict'

class Calculator {
  //write your code here
  constructor (input) {
    this.input = input;
  }

  add (num) {
    this.input += num;
    return this;
  }

  substract (num) {
    this.input -= num;
    return this;
  }

  multiply (num) {
    this.input *= num;
    return this;
  }

  divide (num) {
    this.input /= num;
    return this;
  }

  square (num) {
    this.input **= num;
    return this;
  }

  squareRoot () {
    this.input = Math.sqrt(this.input);
    return this;
  }
}

let test = new Calculator(16);
// console.log(test.add(2));
// console.log(test.substract(8));
// console.log(test.multiply(2));
// console.log(test.divide(4));
// console.log(test.square(4));
// console.log(test.squareRoot());
console.log(test.add(2).substract(8).multiply(2).divide(4).square(4).squareRoot());

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
