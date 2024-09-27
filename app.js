// Управление элементами массива
const users = ['Аня','Вика','Катя'];
users[users.length -1] = 'Кристина'; // перезаписали 3 элемент массива
console.log(users[users.length -1]);


users[users.length] = 'Никита'; // добавили никиту последним
console.log(users[users.length -1]);


const arrLenght = users.push('Игорь'); // добавить последним
console.log(users);
console.log(arrLenght);


const arrLenght2 = users.unshift('Тимофей'); // добавить первым
console.log(users);
console.log(arrLenght2);


users.pop(); // удалил последний
const arrLenght3 = users.pop();  // в отличии от добавления, возвращает удаленный элемент
console.log(users);
console.log(arrLenght3);


const el2 = users.shift();  // удалил последний
// в отличии от добавления, возвращает удаленный элемент
console.log(el2);
console.log(users);