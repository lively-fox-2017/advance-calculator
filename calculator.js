'use strict'

class Calculator {
  //write your code here
  constructor (defaultNum = 0) {
    this.defaultNum = defaultNum;
    this.pi = Math.PI;
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
  square (x) {
    let temp = this.defaultNum;
    for(let i =1;i<x;i++){
      temp *= this.defaultNum;
    }
    this.defaultNum = temp;
    return this;
  }
  squareRoot () {
    this.defaultNum = Math.sqrt(this.defaultNum);
    return this;
  }
  circleCircumference(){
    this.defaultNum = Math.floor(2 * this.pi * this.defaultNum);
    return this;
  }
  circleArea(){
    this.defaultNum = Math.floor(this.defaultNum * this.defaultNum * this.pi);
    return this;
  }
  printResult(){
    return this.defaultNum;
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
// calc.add(10).multiply(10).squareRoot().square(3);
calc.add(7).circleArea();
console.log(calc.printResult());
module.exports = {
  Calculator
}
