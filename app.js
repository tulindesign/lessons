// Тернарные операторы
const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

/*let message;
if (budget > bmwX3Price) {
     message = "BMW";
} else {
     message = 'Велосипед';
}
const message = budget > bmwX3Price ? message = "BMW" : message = 'Велосипед'
console.log (`Я хочу купить ${message}`)*/


// Тернарные операторы

const send =  
budget > bmwX3Price // if
? "BMW" // вариант 1
: budget > fordFocusPrice  // else if
? "Ford"  // вариант 2
: 'Велосипед' // else


console.log (`Я хочу купить ${send}`)