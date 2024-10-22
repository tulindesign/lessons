'use strict'
/* Задачи с  https://learn.javascript.ru/object-methods#klyuchevoe-slovo-this-v-metodah
*/

/*
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/


let calculator = {
  read(a,b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return (this.a && this.b !== undefined) ? this.a + this.b : 'Добавьте значения в калькулятор, методом read(x,y)'
  },
  mul() {
    return (this.a && this.b !== undefined) ? this.a * this.b : 'Добавьте значения в калькулятор, методом read(x,y)'
  }
};

calculator.read(2,4);
console.log( calculator.sum() );
console.log( calculator.mul() );



/*
У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};

Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:


ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:


ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep: function() { // показывает текущую ступеньку
    console.log( this.step );
    return this
  }
};

ladder.up().up().down().showStep().down().showStep(); 
