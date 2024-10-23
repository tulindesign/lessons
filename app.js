'use strict'
// IIFE

function init() {
  console.log('Start');
}
init();

(function() {
  console.log('Start IIF0');
  const a = 1;
})(); //запустится 1 раз, модуль

console.log(a);