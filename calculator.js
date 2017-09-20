'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.val=0 ;
    this.pi = 3.14 ;
  }
  add (num) {
    this.val += num ;
    return this ;
  }
  substract (num) {
    this.val -= num ;
    return this ;
  }
  multiply (num) {
    this.val *= num ;
    return this ;
  }
  divide (num) {
    this.val /= num ;
    return this ;
  }
  square (num) {
    this.val = Math.pow(this.val, num) ;
    return this ;
  }
  squareRoot (num) {
    this.val = Math.sqrt(this.val,num) ;
    return this ;
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

let itung = new Calculator;

console.log(itung.add(3).add(3).substract(1).square(2).squareRoot(2));
