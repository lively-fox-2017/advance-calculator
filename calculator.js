'use strict'

class Calculator {
    //write your code here
    constructor() {
        this.num = 0
        this.pi = 3.14
    }
    add(numAdd) {
        this.num += numAdd
        return this
    }
    substract(numSubstract) {
        this.num -= numSubstract
        return this
    }
    multiply(numX) {
        this.num *= numX
        return this
    }
    divide(numDivide) {
        this.num /= numDivide
        return this
    }
    square(numSquare) {
        this.num = Math.pow(this.num, numSquare);
        return this
    }
    squareRoot() {
        this.num = Math.sqrt(this.num)
        return this
    }
    wideCircle() {
        this.num = this.pi * this.num * this.num
        return this
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