'use strict'

class Calculator {
    constructor (def = 0) {
        this.result = def;
        this.pi = Math.PI;
    }
    add (num) {
        this.result += num;
        return this;
    }
    substract (num) {
        this.result -= num;
        return this;
    }
    multiply (num) {
        this.result *= num;
        return this;
    }
    divide (num) {
        this.result /= num;
        return this;
    }
    square (exp = 2) {
        this.result = Math.pow(this.result, exp);
        return this;
    }
    squareRoot () {
        this.result = Math.sqrt(this.result);
        return this;
    }
    circleArea() {
        this.result = (this.pi * this.square().result).toFixed(2);
        return this;
    }
    circleCircumference() {
        this.result = (this.multiply(2 * this.pi).result).toFixed(2);
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
