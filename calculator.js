'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num=num
  }
  add (tambah) {
    this.num=this.num+tambah
    return this
  }
  substract (kurang) {
    this.num=this.num-kurang
    return this
  }
  multiply (kali) {
    this.num=this.num*kali
    return this
  }
  divide (bagi) {
    this.num=this.num/bagi
    return this
  }
  square (pangkat) {
    this.num=Math.pow(this.num,pangkat)
    return this
  }
  squareRoot (akar) {
    this.num=Math.sqrt(this.num)
    return this
  }
  phi(phi){
    this.num=Math.PI*(this.num+this.num)
    return this
  }
}
var num=new Calculator(50)
console.log(num);
console.log(num.add(10).substract(10).multiply(4).divide(10).square(2).squareRoot(9).phi(21));

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
