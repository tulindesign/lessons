'use strict'
/*
  Создайте объект пользователя с паролем.
  С помощью функции ниже удалить пароль сделав функцию сброса пароля
*/

const user = {
   firstName: 'Вася',
   password: 'mypassword',
   remotePasword(reset) {
    reset ? this.password = undefined: this.password = '1';
  }
}

function remotePasword(reset) {
  reset ? this.password = undefined: this.password = '1';
}

const resetUserPassword = remotePasword.bind(user, true)


resetUserPassword()
console.log(user);