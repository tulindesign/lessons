//знакомство с массивами

const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = [
    'admin',
    'user',
    'superuser'
];

const userInfo = [
    'Аня', 25
];

console.log(roles); // вывести массив
console.log(roles[0]); //вывести первый
console.log(roles.length); // длина массива
console.log(roles[roles.length - 1]); //найти последний

// смотреть на поддержку, новый вид, компактный но вопрос поддержки
console.log(roles.at(0));
console.log(roles.at(-1)); 

const usersAge = [2040 - 2022, 20-'6'];
console.log(usersAge);

const usersAge2 = [2040 - 2022, 20 >'6'?'da':'no'];
console.log(usersAge2);

const userNames = new Array('Вася','Петя','Катя');
console.log(userNames);

function sqaure(el) {
    return el**2;
}
const usersAge3 = [10,20,30];
console.log(sqaure(usersAge3[0]));