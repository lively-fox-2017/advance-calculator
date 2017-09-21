'use strict'

class Calculator {
    //write your code here
    constructor() {
        this.num = 0;
    }
    add(numAdd) {
        this.num += numAdd
        return this
    }
    substract() {}
    multiply() {}
    divide() {}
    square() {}
    squareRoot() {}
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