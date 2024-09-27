// /*
// Упражнение добавить задачи и выполнить их
// */

const progressTasks = [];
const availableTasks =['Почистить зубы','Умыться','Позавтракать','Поучить JS'];
const doneTasks = [];
function showAllTasksCompleteALert() {
alert(`Вы выполнили все задачи на сегодня:
${doneTasks.join(`, 
`)}
Возвращайтесь завтра`);
};
function isTasksEmpty(array) {//Проверка массива на пустоту
   return array.length == 0 
}
function addTaskToArray(array1,array2,getTaskIndex) {//функция добавления в array1 первого значения из массива array2
    return getTaskIndex == - 1
    ? alert('Такой задачи не существует'):
    array1.push(...(array2.splice(getTaskIndex,1)));
}
function getTaskIndex(arrayList,questionString) {//Фукнция вопроса + вывода списка задач
    return arrayList.indexOf(prompt(`${questionString}:
        ${arrayList.join(`,
        `)}`));
}

while (!(isTasksEmpty(availableTasks) && isTasksEmpty(progressTasks))) {
const addTask = prompt(`Список выполняемых задач на текущий момент: 
${!isTasksEmpty(progressTasks) ? progressTasks.join(`,
`):'Отсутствует'}

Хотите добавить новую задачу?
Да(1) или Нет(0)`);
    if (addTask==1) { //если нажал 1
        if (!isTasksEmpty(availableTasks)) { // если есть задания которые можно взять
            addTaskToArray(progressTasks,availableTasks,getTaskIndex(availableTasks,'Доступные задачи для добавления'));

        } else if (isTasksEmpty(availableTasks)&&isTasksEmpty(progressTasks)) { // если нет Новых, и текущих задач
            showAllTasksCompleteALert();
        }  else { // если нет новых, но есть текущие
            addTaskToArray(doneTasks,progressTasks,getTaskIndex(progressTasks,'Новых доступных задач нет.Какую задачу вы выполнили?'));
        }
    }
    else { // если нажал не 1 
        if (!isTasksEmpty(progressTasks)) {
            addTaskToArray(doneTasks,progressTasks,getTaskIndex(progressTasks,'Какую задачу вы выполнили?'));
        } else {
            break;
        }
    }
} 
showAllTasksCompleteALert();



/*
Дан список задач
const tasks = ['Задача 1'];
Сделать функции:
- Добавить задачи в конец
- Удаление задачи по названию
- Перенос задачи в начало списка по названию

Всегда меняем исходный массив

*/
// const tasks = ['Задача 1'];

// function addValue(task) {
//     tasks.push(task)
// } 
// function removeValue(task) {
//     if (tasks.indexOf(task) === -1) {
//         return
//     } else {
//     tasks.splice(tasks.indexOf(task),1);
//     }
// } 
// function valueToStart(task) { 
//     if (tasks.indexOf(task) === -1) {
//     return
//     } else {
//         tasks.unshift(tasks.pop(tasks.indexOf(task),1))
//     }
// }
// addValue('Задача 2');
// addValue('Задача 3');
// addValue('Задача 4');
// addValue('Задача 5');
// removeValue('Задача 3');
// valueToStart('Задача5');

// console.log(tasks);