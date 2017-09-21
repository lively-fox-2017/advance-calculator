'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.number = 0
  }
  add (i) {
    this.number += i
    return this
  }
  substract (i) {
    this.number -=  i
    return this
  }
  multiply (i) {
    this.number *= i
    return this
  }
  divide (i) {
    this.number /= i
    return this
  }
  radius (i) {
    const pi = 3.14
    this.number = pi * (i * i)
    return this
  }
  square (i) {
    
    this.number = Math.pow(i,2)
    return this
  }
  squareRoot (i) {
    this.number = Math.sqrt(i)
    return this
  }

  print () {
  return `Hasilnya adalah ${this.number}` 
  }
}

let Calc = new Calculator ()

// //Calc.add(12)
// Calc.multiply(2)
// //Calc.squareRoot(2)
// console.log(Calc.print())
//var output = `radius nya ${Calc.radius()}`;

console.log(Calc.radius(7))

console.log(Calc.add(45).substract(2).print());
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
