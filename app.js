'use strict';

const user = {
  firstName: 'Вася',
  lastName: 'Пупкин',
  age: 20,
  getUserInfo: function() {
    console.log(`${this.firstName} ${this.lastName}`);

    const canDrink = () => {
      return this.age >= 18 ? console.log('может пить'): console.log('Пить не может')
    }
    canDrink();
  },
  
  getUserInfoArrow: () => {
    console.log(`${this.firstName} ${this.lastName}`);
  },
}

console.log(user.age2)
user.getUserInfo();
user.getUserInfoArrow();


// this - в стрелочных обращается вне функции на уровень выше

// console.log(
//   Object.entries(user).reduce((acc,[key]) => {
//     console.log(user[key]);
//     acc += this[key];
//   }, 0)
// );