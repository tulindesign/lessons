// Обращение к элементам

const user = {
  name: 'Вася',
  surname: 'Пупкин',
  age: 24,
  skills: [
    'Программирование',
    'Готовка'
  ],
  1: 1,
  eduBasic: 'Школа 10',
  eduPro: 'МФТи'
}

console.log(user.skills); // не расчетное
console.log(user['skills']); 
const level = 'Pro';
console.log(user['edu' + level]); // если расчетное 

// const res = prompt('Введите свойство');
// console.log(user[res]);


user['city'] = 'Москва'; // создание нового свойства


console.log(user); 
user.age = 30;
console.log(user); 