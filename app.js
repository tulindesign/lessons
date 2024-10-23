'use strict'
// сокращенное написание методов в объектах
const b = 1;

const a = {
  b,
  getBalt() {
    return this.b
  }
}
console.log(a.getBalt());