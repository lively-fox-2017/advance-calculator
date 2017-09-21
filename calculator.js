'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.result = 0;
  }

  add() {
   let args = arguments;
   for(let i = 0; i< arguments.length;i++){
     this.result += args[i]
   }

   return this
  }
  
  substract () {
    let args = arguments;
    for(let i = 0; i< arguments.length;i++){
      this.result -= args[i]
    }

    return this
  }
  
  multiply () {
    let args = arguments;
    if(this.result === 0 && this.args >= 1){
      this.result = 1;
    }

    for(let i = 0; i< arguments.length;i++){
      this.result = this.result*args[i];
    }

    return this;
  }
  
  divide () {
    let args = arguments;
    if(this.result === 0 && this.args >= 1){
      this.result = 1;
    }

    for(let i = 0; i< arguments.length;i++){
      this.result = this.result/args[i];
    }

    return this;
  }
  
  square() {
    let args = arguments;
    let temp = this.result;
    if(this.result === 0 && this.args >= 1){
      this.result = 1;
    }

    for(let i = 0; i< arguments[0];i++){
      this.result = this.result*temp;
    }

    return this;
  }
  
  squareRoot () {
  this.result = Math.pow(this.result,1/2);
  this;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
