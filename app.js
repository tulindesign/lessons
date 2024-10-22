'use strict';


function addNumb(num1,num2) {
  console.log(this);
  return num1 + num2
}

const addNumb2 = (num1,num2) => {
  console.log(this);
  return num1 + num2
}


const user = {
  name: 'Вася',
  surname: 'Пупкин',
  getFullname: function() {
    console.log(this);
    return this.name + ' ' + this.surname;
  }
}

user.getFullname()

const user2 = { 
  name: 'Марина',
  surname: 'Катц',
}

user2.getFullname = user.getFullname;
user2.getFullname()
