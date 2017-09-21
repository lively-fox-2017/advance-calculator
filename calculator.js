'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.tampung = 0;
  }

  add (input) {
    this.tampung = this.tampung + input;
    return this;
  }

  substract (input) {
    this.tampung = this.tampung - input;
    return this;
  }

  multiply (input) {
    this.tampung = this.tampung * input;
    return this;
  }

  divide (input) {
    this.tampung = this.tampung / input;
    return this;
  }

  square (input) {
    this.tampung = input;
    this.tampung = Math.pow(this.tampung, 2)
    return this;
  }

  squareRoot (input) {
    this.tampung = input;
    this.tampung = Math.sqrt(this.tampung);
    return this;
  }

  lingkaran(input){
    this.tampung = input;
    this.tampung = Math.PI * input * input;
    return this;

  }

  hasil(){
    return this.tampung;
  }

}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
let coba = new Calculator();
console.log(coba.lingkaran(7).hasil());


module.exports = {
  Calculator
}
