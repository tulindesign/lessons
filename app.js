// https://learn.javascript.ru/constructor-new

/* Задача 1
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.

*/

let calculator = new Calculator();

function Calculator() {
    obj = {
        read(a = prompt('Введите А'), b = prompt('Введите Б')) {
            this.a = a;
            this.b = b;
        },
        sum() {
            return +this.a + +this.b
        },
        mul() {
            return +this.a * +this.b
        }
    }
    return obj;
}

calculator.read();

console.log(calculator)
console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );

let calculator2 = new Calculator();
calculator2.read();
console.log(calculator2)
console.log( "Sum=" + calculator2.sum() );
console.log( "Mul=" + calculator2.mul() );



/* Задача 2

Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
*/

let accumulator = new Accumulator(1); // начальное значение 1

function Accumulator(startingVal) {
    this.value = startingVal;
    this.read = function() {
        this.value  +=  +prompt('Введите добавляемое значение');;
    }
}

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); 
accumulator.read(); 
accumulator.read(); 
accumulator.read(); 

console.log(accumulator.value); // выведет сумму этих значений

console.log(accumulator);