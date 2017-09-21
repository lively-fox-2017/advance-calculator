'use strict'

class Calculator {
  //write your code here
  constructor (set) {
    this.hasil=set;
  }
  add (num) {
    this.hasil=this.hasil+num;
    return this;
  }
  substract (num) {
    this.hasil=this.hasil-num;
    return this;
  }
  multiply (num) {
    this.hasil=this.hasil*num;
    return this;
  }
  divide (num) {
    this.hasil=this.hasil/num;
    return this;
  }
  square (num) {
    this.hasil=Math.pow(this.hasil,num);
    return this;
  }
  squareRoot () {
    this.hasil=Math.sqrt(this.hasil);
    return this;
  }
  circle(){
    this.hasil=2*Math.PI*this.hasil;
    return this;
  }
  clear(){
    this.hasil=0;
    return this;
  }
  print(){
    console.log(this.hasil);
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
var calculator=new Calculator(2);
// calculator.print();
calculator.add(2)
.substract(2).multiply(3)
.divide(2)
.square(2)
.squareRoot()
.circle().print();
// calculator.clear().print();


module.exports = {
  Calculator
}
