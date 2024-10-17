// Вытащить имя и фамилию в отдельные переменные

const fullUserName = 'Вася aka Terminator Пупкин';

const user = {
  name: fullUserName.split(' ')[0],
  secondName: fullUserName.split(' ')[1]
}
console.log(user); 

const userName = fullUserName.slice(
  0,
  fullUserName.indexOf(' ')
);
const secondName = fullUserName.slice(
  fullUserName.lastIndexOf(' ')+1,
  fullUserName.length
);

console.log(`${userName} ${secondName}`);

