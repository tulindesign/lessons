/* Методы объектов */

const user = {
  name: 'Вася',
  surname: 'Пупин',
  age: 24,
  getFullName: function() {
    return `${this.name} ${this.surname}`
  }
}
console.log(user.getFullName());