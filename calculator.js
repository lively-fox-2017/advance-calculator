'use strict'

class Calculator {
  //write your code here
  constructor (number1) {
    this.input1 = number1
  }

  add (number2) {
    this.input1=this.input1+number2
    return this
  }

  substract (number2) {
    this.input1=this.input1-number2
    return this
  }

  multiply (number2) {
    this.input1=this.input1*number2
    return this
  }

  divide () {
    this.input1=this.input1/number2
    return this
  }

  square (number2) {
    this.input1=Math.pow(this.input1, number2)
    return this
  }

  squareRoot () {
    this.input1=Math.sqrt(this.input1)
    return this
  }

  circle () {
    this.input1=Math.PI*Math.pow(this.input1, 2)
    return this
  }

  save(){
    return this.input1
  }
}

let add = new Calculator(4)

//console.log(add.circle())
console.log(add.circle().add(7).save())

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
