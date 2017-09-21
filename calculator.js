'use strict'

class Calculator {
  //write your code here
  constructor () {
  	this.sum = 0
  	this.pi = 3.14
  	
  }
  add (angka1, angka2) {
  	this.sum = angka1 + angka2
  	return this
  }
  substract (minNum) {
  	this.sum -= minNum
  	return this
  }
  multiply (kali) {
  	this.sum *= kali
  	return this
  }
  divide (bagi) {
  	this.sum /= bagi
  	return this
  }
  square (pangkat) {
  	this.sum = Math.pow(this.sum, pangkat)
  	return this
  }
  squareRoot (akar) {
  	this.sum = Math.sqrt(this.sum)
  	return this.sum
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

let calc = new Calculator();
console.log(calc.add(1, 3).substract(3).multiply(32).divide(2).square(2).squareRoot())