'use strict'
/*

Дополнить объекто методами для получения имени
- компании
- сео
- сотрудникоа

*/

const company = {
  name: 'ООО Агро',
  employees: [
    {
      name: 'Света',
      getName() {
        return this.name
      },
    },
    {
      name: 'Игорь',
      getName() {
        return this.name
      },
    }
  ],
  ceo: {
      name: 'Вася',
      getName() {
        return this.name
      },
  },
  getName() {
    return this.name
  },
}
console.log(company.getName());
console.log(company.ceo.getName());
console.log(company.employees.map(item => item.getName()));