'use strict'
// let, var, const, function, arguments
// Scope chain
// this


function sumNumb(num1, num2) {
  console.log(this);
  console.log(arguments);
  return num1 + num2;
}
console.log(sumNumb(1,4));

// в стрелочных аргументов нет
const sumNumbArr = (num1, num2) => {
  console.log(this);
  console.log(arguments);
  return num1 + num2;
}
console.log(sumNumbArr(1,4));