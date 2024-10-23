'use strict'
// Замыкания

/* 
Замыкание - это комбинация функции и лексического окружения, в котором эта функция была определена.

Простыми словами: функция помнит, в каком контексте она была создана и может его использовать
*/


// функция высшенго порядка - функция, которая возвращает другую функцию
function changeBalance() {
    let balance = 0;
    return function(sum) {
        balance += sum; 
        console.log(balance);
    }
}

const change =  changeBalance();

change(100);
change(-50);
change(200);

console.dir(change);

