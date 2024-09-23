//Логические операторы
// И - когда ВСЕ true
// ИЛИ - когда хотябы 1 true

const isAdmin = true;
const canWrite = true;
let superAdmin;
/*
console.log(`Есть права на редактирование системных файлов ${isAdmin && canWrite ? 'Да' : 'Нет'}`); // И


console.log(`Могу редактировать обычный файл (либо админ, либо есть права на редактирование) ${isAdmin || canWrite ? 'Да' : 'Нет'}`); // ИЛИ


console.log(`Все остальные пользователи НЕ админы - ${!isAdmin ? 'Да' : 'нет'}`); // Инверсия
*/

console.log(`Системный файл;
Есть доступ к редактированию -  ${canWrite == true ? 'Да': 'Нет'}`);

let isEdited = prompt('Файл редактируется? Да (1) или Нет(0)');

if (isEdited == 1) {
    SuperAdmin = prompt('Вы супер админ? Да(1) Нет (0)');

    console.log(SuperAdmin == 1 ? `Можно редактировать любой файл, т.к. вы СуперАдмин` : `На текущий момент редактировать - ${isAdmin && canWrite && Boolean(!(isEdited == 1 ? true : false)) ? 'Можно' : 'Нельзя'}`);


} else {
    console.log(`На текущий момент редактировать - ${isAdmin && canWrite && Boolean(!(isEdited == 1 ? true : false)) ? 'Можно' : 'Нельзя'}`);
}