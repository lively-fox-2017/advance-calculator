'use strict'

class Calculator {
  //write your code here
  constructor (num = 0) {
	this.num = num;
	this.pi = 3.14;
  }
  
  getPI(){
	return this.pi;
  }
  
  getNum(){
	return this.num;
  }
  
  add (angka = 0) {
	this.num += angka;
	return this;
  }
  
  substract (angka = 0) {
	this.num -= angka;
	return this;
  }
  
  multiply (angka = 1) {
	this.num *= angka;
	return this;
  }
  
  divide (angka = 1) {
	this.num /= angka;
	return this;
  }
  
  square (angka = 1) {
	this.num = Math.pow(this.num, angka);
	return this;
  }
  
  squareRoot (angka = 2) {
	this.num = Math.sqrt(this.num, angka);
	return this;
  }
  
  luasLingkaran(jari2){
	this.num = this.pi * jari2 * jari2;
	return this.num;
  }
  
  kelilingLingkaran(jari2){
	this.num = 2 * this.pi * jari2;
	return this.num;
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
