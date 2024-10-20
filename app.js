// Деструктуризация и rest

let user = {
  name: "Вася",
  secondName: 'Пупкин',
  age: 30
}

const {age, ... userWithoutAge} = user;

console.log(age);
console.log(userWithoutAge);


const additionalData = {
  skills: ['Разработка','Дизайн'],
  creditCard: '2345-2345-2345-2345'
}

user = {
  ...user,
  ...additionalData
}
console.log(user); 