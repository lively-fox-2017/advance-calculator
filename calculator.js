'use strict'

class Calculator {
  //write your code here
  constructor () {
  this.number = 0;
  this.phi = 3.14;
}
  add (numAdd) {
  this.number += numAdd;
  return this;
  }
  substract (numSubstract) {
   this.number -= numSubstract;
   return this;
  }
  multiply (numMultiply) {
    this.number *= numMultiply;
    return this;
  }
  divide (numDivide) {
    this.number /= numDivide;
    return this;
  }
  square (numSquare) {
    this.number = Math.pow(this.number, numSquare);
    return this;
  }
  squareRoot () {
   this.number = Math.sqrt(this.number);
    return this;
  }
  circle(){
    this.number = this.phi*this.number*this.number;
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
