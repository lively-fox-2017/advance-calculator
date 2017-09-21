'use strict'

class Calculator {
  //write your code here
  constructor(number) {
    // simpan angka yang mau diproses sama kalkulator
    this.number = number;
  }

  add(num2) {
    //  angka yang disimpan ditambah sama angka tertentu
    this.number += num2;
    return this;
  }

  substract(num2) {
    // hasilnya dikurang angka yang lain
    this.number -= num2;
    return this;
  }

  multiply(num2) {
    // habis itu dikali pake angka lain
    this.number *= num2;
    return this;
  }

  divide(num2) {
    // hasilnya dibagi dengan angka lain
    this.number /= num2;
    return this;
  }

  square(num2) {
    //  hasilnya dipangkat dengan angka tertentu
    this.number = Math.pow(this.number, num2);
    return this;
  }

  squareRoot() {
    // hasilnya diakar pangkat 2
    this.number = Math.sqrt(this.number);
    return this;
  }

  luaslingkaran() {
    // menghitung luas lingkarang pakai fungsi Math.PI lalu hasilnya dibulatkan
    this.number = Math.round((Math.PI * Math.pow(this.number, 2)));
    return this;
  }

  print() {
    // cuman buat ngeprint
    return this.number;
  }
}

let angka1 = new Calculator(12);

console.log(angka1.add(3).substract(5).multiply(8).divide(4).square(2).squareRoot().luaslingkaran().print());
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
