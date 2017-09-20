'use strict'

class Calculator {
  //write your code here
  constructor (defaultNum = 0) {
    this.defaultNum = defaultNum;
  }
  add (x) {
    this.defaultNum += x;
    return this;
  }
  substract (x) {
    this.defaultNum -= x;
    return this;
  }
  multiply (x) {
    this.defaultNum *= x;
    return this;
  }
  divide (x) {
    this.defaultNum /= x;
    return this;
  }
  square () {
    this.defaultNum *= this.defaultNum;
    return this;
  }
  squareRoot () {
    this.defaultNum = Math.sqrt(this.defaultNum);
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
var calc = new Calculator(0);
calc.add(10).multiply(10).squareRoot().square();
console.log(calc);
module.exports = {
  Calculator
}
