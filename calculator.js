'use strict'

class Calculator {
  //write your code here
  constructor (x=0) {
    this.pi=3.14;
    this.currValue = x;
  }
  add (addedWith) {
    this.currValue+= addedWith;
    return this;
  }
  substract (subtrWith) {
    this.currValue-= subtrWith;
    return this;
  }
  multiply (multWith) {
    this.currValue*= multWith;
    return this;
  }
  divide (divWith) {
    this.currValue/= divWith;
    return this;
  }
  square (jumlahPangkat) {
    var temp = this.currValue;
    for (let i = 1; i<=jumlahPangkat; i++){
      this.currValue*= temp;
    }
    return this;
  }
  squareRoot (jumlahAkarPangkat) {
    let temp = this.currValue;
    for (let i= 1; i<= jumlahAkarPangkat; i++){
      this.currValue/= temp;
    }
    return this;
  }
  getCurrValue(){
    return this.currValue;
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
