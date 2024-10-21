// Задачи с  https://learn.javascript.ru/object

/* 
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
*/

const user = {}
console.log(user);
user.name = 'John';
console.log(user);
user.surname = 'Smith';
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name

console.log(Object.keys(user)); // возвращает массив


/*
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

*/

let schedule = {

};
console.log(schedule);
function isEmpty(objName) {
  return Object.keys(objName).length === 0; // Object.keys(object name)
}
//вариант 2
function isEmpty2(obj) {
  for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
}
console.log(isEmpty(schedule));
console.log(isEmpty2(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));
console.log(isEmpty2(schedule));



/* 
У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
*/
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// let sum = salaries.reduce((acc, key) => acc += key,0)



const sum = Object.entries(salaries).reduce((acc, [key,value]) => { //key можно опустить если не нужен
  return acc += value;
}, 0);
console.log(sum);

let sum2 = 0;
for (let key in salaries) {
  key !== undefined ? sum2 += salaries[key]: sum2
}
console.log(sum2);


/* 
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.

*/
function multiplyNumeric(obj) {
  for (let key in obj) {
    typeof obj[key] == 'number' ? obj[key] *= 2 : obj[key]
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);