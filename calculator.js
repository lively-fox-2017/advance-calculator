'use strict'

class Calculator {
  //write your code here
  constructor() {
    this.Hasil = 0;
  }
  //Tambah
  add(input) {
    this.Hasil = this.Hasil + input;
    return this;
  }
  //Kurang
  substract(input) {
    this.Hasil = this.Hasil - input;
    return this;
  }//Perkalian
  multiply(input) {
    this.Hasil = this.Hasil * input;
    return this;
  }//Pembagian
  divide(input) {
    this.Hasil = this.Hasil / input;
    return this;
  }//Pangkat
  square(input) {
    this.Hasil = Math.pow(this.Hasil, input);
    return this;
  }//Akar
  squareRoot(input) {
    this.Hasil = Math.sqrt(this.Hasil, input);
    return this;
  }//Lingkaran
  circle(input) {
    this.phi = Math.PI;
    this.Hasil = this.phi * ((input / 2) * 2);
    return this;
  }
}
let hitung = new Calculator();
// console.log(hitung.add(10));
// console.log(hitung.substract(5));
// console.log(hitung.multiply(6));
// console.log(hitung.add(10).divide(7));
// console.log(hitung.square(9));
console.log(hitung.add(10).substract(5).multiply(2).divide(2).squareRoot(1));

module.exports = {
  Calculator
}
