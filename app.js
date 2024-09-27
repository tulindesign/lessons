//поиск элемента в массиве

const roles = ['user','admin','manager','admin'];

const elIndex =  roles.indexOf('admin') // ищет первое вхождение
console.log(elIndex);


const elIndex2 =  roles.indexOf('superuser') // поиск, не найдено -1
console.log(elIndex2);

const question = prompt('Ваша роль?');
const searchResult = roles.indexOf(String(question)) >=0 ? 'Доступ разрешен': 'нет доступа, роль не найдена';
console.log(searchResult);
// name.indexOf - проверяет наличие, индекс, или -1 если не найден


const question2 = prompt('Ваша роль?');
const searchResult2 = roles.includes(question2) ? 'Доступ разрешен': 'нет доступа, роль не найдена';
console.log(searchResult2);
// name.includes - проверяет наличие, возвращает true