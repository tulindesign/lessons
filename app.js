/*
  преобразовать пользователей до вида 
  { fullName: 'Вася Пуппкин', skillNum: 2}
*/

let users = [
  {
    name: 'Вася',
    surname: 'Пупкин',
    age: 30,
    skills: ['Разработка', 'DevOps']
  },
  {
    name: 'Катя',
    surname: 'Белова',
    age: 18,
    skills: ['Дизайн']
  }
]

// users = users.map((item) => {
//   item.fullName = `${item.name} ${item.surname}`,
//   item.skillNum = item.skills.length;
//   delete item.name;
//   delete item.surname;
//   delete item.age;
//   delete item.skills;
//   return {item};
// })


const userData = users.map(item => {
    return {
      fullName: `${item.name} ${item.surname}`,
      skillNum: item.skills.length
    };
  })
  
console.log(userData);