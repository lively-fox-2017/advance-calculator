'use strict'

class Calculator {
  //write your code here
  constructor (nilai1) {
    this.nilai1=nilai1;
  }
  //penambahan
  add (nilai2) {
    this.nilai1+=nilai2;
    return this;
  }
  //pengurangan
  substract (nilai2) {
    this.nilai1-=nilai2;
    return this;
  }
  //perkalian
  multiply (nilai2) {
    this.nilai1*=nilai2;
    return this;
  }
  //pembagian
  divide (nilai2) {
    this.nilai1/=nilai2;
    return this
  }
  //perpangkatan
  squareRoot(nilai2) {
    this.nilai1=Math.pow(this.nilai1,nilai2);
    return this;
  }
  //luas lingkaran
  circleArea() {
    this.nilai1=(2*Math.PI*this.nilai1);
    return this;
  }

  print(){
    return this.nilai1;
  }
}
let calculator=new Calculator(2);
// console.log(calculator.squareRoot(78).print())
console.log(calculator.add(2).substract(1).print())
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
