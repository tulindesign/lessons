//Шпаргалка по методам МАССИВА

const arrayFamily = [['Тимофей',30],['Катя',30],['Милана',6],['Алиса',2]];

console.log(arrayFamily);
console.log(arrayFamily[0]);
console.log(arrayFamily.length);

//delete array[2] // делает значение - empty


console.log('--------Splice--------------');


const arrayFamily2 = [['Тимофей',30],['Катя',30],['Милана',6],['Алиса',2]];


const newArray = arrayFamily2.splice(2,1); //вырезать со второго значения, 1 значение;
console.log(arrayFamily2); // splice - вырезает в исходном, возвращает вырезанное
console.log(newArray); //вырезанное


arrayFamily2.splice(arrayFamily2.length,0,(['Милана',7])); // вставить после последенго (ширина массива), удалить 0, [Милана, 7]

console.log('--------Slice--------------');


const arrayFamily3 = [['Тимофей',30],['Катя',30],['Милана',6],['Алиса',2]];

console.log(arrayFamily3.slice(0,100));
console.log(arrayFamily3.slice(1));


console.log('--------Concat--------------');


const arrayFamily4 = [['Тимофей',30],['Катя',30],['Милана',6],['Алиса',2]];

console.log(arrayFamily4.concat(['Алиса2',2])); // новый массив (добавляет только значения)
console.log(arrayFamily4);



console.log('--------ForEach--------------');

const arrayFamily5 = [['Тимофей', 30],['Катя', 30],['Милана', 6],['Алиса', 2]];

arrayFamily5.forEach((item) => { //для каждого элемента массива, взять его элемент с индексом 1 и прибавить 10
    item[1] = +item[1];
    item[1] += 10;
    console.log(item[1]);
});


console.log('--------Поиск --------------');
console.log('--------IndexOf, Includes --------------');

const arrayFamily6 = [['Тимофей', 30],['Катя', 30],['Милана', 6],['Алиса', 2]];

console.log(arrayFamily6.indexOf(['Тимофей', 30]));
console.log(arrayFamily6.includes(['Тимофей', 30]));

console.log(arrayFamily6.slice(0,10));
console.log(arrayFamily6.slice(0,10)[1]);
console.log(arrayFamily6.includes(arrayFamily6.slice(0,1)[0]));

console.log('--------find и findIndex/findLastIndex --------------');

let findResult = arrayFamily6.find(item => {
    return item[0] == 'Алиса';
    // если true - возвращается текущий элемент и перебор прерывается
    // если все итерации оказались ложными, возвращается undefined
  });
console.log(findResult);

let findIndexResult = arrayFamily6.findIndex(item => {
    return item[0] == 'Алиса';
    // если true - возвращается индекс элемента
    // если все итерации оказались ложными, возвращается undefined
  });
console.log(findIndexResult);


console.log('--------Filter --------------');
// НЕ ИЗМЕНЯЕТ ИСХОДНЫЙ МАССИВ
let filterResult = arrayFamily6.filter(item => {
    return item[0] !== 'Алиса';
    // если true - возвращается индекс элемента
    // если все итерации оказались ложными, возвращается undefined
  });
console.log(filterResult);



console.log('--------Преобразование массива --------------');
console.log('--------MAP--------------');

// НЕ ИЗМЕНЯЕТ ИСХОДНЫЙ МАССИВ
let mapResult = arrayFamily6.map((item,i) => {
    return `${i+1}. ${item[0]} ${item[1]} лет`
    // если true - возвращается индекс элемента
    // если все итерации оказались ложными, возвращается undefined
  });
  console.log(mapResult);

  let stringLenght = arrayFamily6.map((item) => {
   return item = `${item[0]} = ${item[0].length} букв`; // вывести кол-во символов в каждом слове
  });
  console.log(stringLenght);

  
console.log('--------SORT --------------');
// СОРТИРУЕТ ИСХОДНЫЙ

const objectsTree = ['$','$a','&_a',1,2,22,10,'Насос 10','Насос 11','Насос 1','$Насос 1','Насос 22',5,4,3,'Насос 2', 'Pipe#1', 'Pipe#9', 'Pipe#10', 'Pipe#11', 'Pipe#2', 'Pipe#22', 'Pipe#33'];

function compareNumeric(a, b) {
  if (a < b) return 1; // если первое значение больше второго
  if (a == b) return 0; // если равны
  if (a > b) return -1; // если первое значение меньше второго
}
  
const sortZA = objectsTree.toSorted(compareNumeric);
  
const sortAZ = objectsTree.toSorted(); //toSorted (не меняет ИСХОДНЫЙ)
console.log(sortAZ);  
console.log(sortZA);  


let arr = [ 1, 2, 15 ];
arr.sort( (a, b) => a - b );
console.log(arr);
console.log(arr.reverse());

console.log('--------SORT String with Number --------------');
/* СОРТИРОВКА от а до я
Спец символы
цифры
стринги (с учетом нумерации)
*/ 
console.log(objectsTree.toSorted((a, b) => a.toString().localeCompare(b, 'en', { numeric: true, sensitivity: 'base' })));


console.log(objectsTree.toSorted((a, b) => a.toString().localeCompare(b, 'en', { numeric: true, sensitivity: 'base' })).reverse());

console.log('--------SPLIT / JOIN--------------');
/* 
Split - разделить стрингу символом в массив
Join - собрать массив в стрингу символом
*/ 

const familyString = 'Тимофей, Катя, Мила, Лиса';
const stringToArray = familyString.split(', ');
console.log(stringToArray);
console.log(familyString.split(''));
console.log(stringToArray.join('/'));



console.log('--------REDUCE--------------');
/* что-то вроде for, foreach
аккамулирует в 1 переменную и её выдает по результату

let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);

Справа налево
let value = arr.reduceRight(function(accumulator, item, index, array) {
  // ...
}, [initial]);


*/
const numberString = [1,2,3,4,5,6,7,9];
const reduceArrayResult = arrayFamily6.reduce((stringArray,item) => {
  return stringArray + item + ' / '
},'Итого = ');
console.log(reduceArrayResult);





// console.log('--------SOME--------------');
// /*
// Проверка на наличие в массиве
// */

// function checkAvailability(arr, val) {
//   return arr.some(function (arrVal) {
//     return val === arrVal[0];
//   });
// }


// console.log(checkAvailability(arrayFamily6, prompt('Введите имя члена семьи')));







/* Задания */

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».


function camelize(str = prompt('Введите строку')) {
  return str
  .split('-')
  .map(
    (item,index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)
  )
  .join('');
}


// console.log(camelize());


/*
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный.
*/
let filterArr2 = [5, 3, 8, 1];

let filtered = filterRange(filterArr2, 1, 4);

function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}
console.log( filtered ); // 3,1 (совпадающие значения)

console.log( filterArr2 ); // 5,3,8,1 (без изменений)



/*
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.
*/

console.log('-------------------');

let filterArr3 = [5, 3, 8, 1, 6, 7, 10, 2];

console.log(filterArr3);

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
  console.log(`index: ${i} item: ${arr[i]}  ${arr[i] < a || arr[i] > b}`);
      if (arr[i] < a || arr[i] > b) {
            arr.splice(i,1);
            i--;
      } 
    }
  }



filterRangeInPlace(filterArr3, 3, 5);
console.log(filterArr3);


// Скопировать и отсортировать массив
let arrNoSort = [5, 2, 1, -10, 8];

arrNoSort.sort().reverse();
// ... ваш код для сортировки по убыванию

console.log( arrNoSort ); // 8, 5, 2, 1, -10


/*
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.
*/

let arrSort2 = ["HTML", "JavaScript", "CSS"];

let sorted2 = arrSort2.toSorted();

console.log( sorted2 ); // CSS, HTML, JavaScript
console.log( arrSort2 ); // HTML, JavaScript, CSS (без изменений)


/*У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
*/
const familyObjects = [
  {name: 'Тимофей', age: 30},
  {name: 'Катя', age: 30},
  {name: 'Ми', age: 6},
  {name: 'Али', age: 2},
]
console.log(familyObjects);
function arrayObjectstoArrayNames(arr) {
  const temparray = [];
  
  for(const [index,item] of arr.entries()) {
    temparray.push(item.name);
  }
  return temparray
}

console.log(arrayObjectstoArrayNames(familyObjects));


/*

У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

*/

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users3 = [ vasya, petya, masha ];
console.log(users3);
let usersMapped = users3.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин


/* 
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
*/
console.log('-----------------------')

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}
let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };

let sortObjectsArray = [ vasya2, petya2, masha2 ];



console.log(sortObjectsArray.sort((a, b) => a.age - b.age));

console.log(sortObjectsArray[0].name); // Вася
console.log(sortObjectsArray[1].name); // Маша
console.log(sortObjectsArray[2].name); // Петя


/* 
Фукнция рандомайза array
*/

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arrNoRandom = [1, 2, 3];
shuffle(arrNoRandom);
console.log(arrNoRandom);


/* 
Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

Например:
*/
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

let usersNew = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(usersNew);
console.log(usersById);
console.log(usersNew);
/*
после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/