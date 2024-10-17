// Базовые методы
const userName = 'вася пупкина';

function firstLetterToUpperCase (str) {
  return str
  .split(' ')
  .map((item) => item[0].toUpperCase() + item.slice(1));
}
console.log(firstLetterToUpperCase(userName)); 
console.log(userName.charAt(0)); 


console.log(userName.length); 
console.log(userName.indexOf('уп'));
console.log(userName.lastIndexOf('а'));
console.log(userName.includes('а'));
console.log(userName.slice(5,8));



