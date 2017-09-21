// 'use strict'

class Calculator {

  Constructor (x,y,result) {
    this.x = x;
    this.y = y;  
    this.result = result;
  }

  add() {
    this.result = this.x + this.y;
    return this;
  }
  substract() {
    this.result = this.x - this.y;
    return this;
  }
  multiply() {
    this.result = this.x * this.y;
    return this;
  }
  divide() {
    this.result = this.x / this.y;
    return this;
  }
  square() {
    this.result = Math.pow(this.x, this.y);
    return this;
  }
  squareRoot() {
    this.result = Math.sqrt(this.y);
    return this;
  }
}

Calculator.prototype.set_x = function(x){
  this.x = x;
  return this;
}

Calculator.prototype.set_y = function(y){
  this.y = y;
  return this;
}




console.log(
new Calculator()
  .set_x(2)
  .set_y(6)
  .add());

  
console.log(
new Calculator()
  .set_x(20)
  .set_y(10)
  .substract());

console.log(
new Calculator()
  .set_x(12)
  .set_y(5)
  .multiply());

console.log(
  new Calculator()
  .set_x(6)
  .set_y(6)
  .divide());
  
console.log(
new Calculator().set_x(10).set_y(2).square());

console.log(
new Calculator().set_x(2).set_y(10).squareRoot());

// * note : you can use several features from ecmascript, such as:
// * - Classes
// * - Default Parameters
// * - Destructured Assignment
// * - Template Literals
// * - Method Chaining


module.exports = {
  Calculator
}

