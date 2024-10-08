// /*
// Упражнение добавить задачи и выполнить их
// */

const progressTasks = [];
const availableTasks =['Почистить зубы','Умыться','Позавтракать','Поучить JS'];
const doneTasks = [];

// function outputValueWithIndex(array) { // функция нумерации массива
//     let tempArray = [];
//     for (const [index,element] of array.entries()) {
//         tempArray.push(`${index+1}. ${element}`);
//     }
//     return tempArray.join(`
// `);

// }

function outputValueWithIndex(array) { // функция нумерации массива
    return array.map((arrayEl, i) => `${i + 1}. ${arrayEl}`).join('\n');
}


function showAllTasksCompleteALert() {
alert(`Вы выполнили все задачи на сегодня:
${outputValueWithIndex(doneTasks)}
Возвращайтесь завтра`);
};
function isTasksEmpty(array) {//Проверка массива на пустоту
   return array.length == 0 
}

function addTaskToArray(array1,array2,questionString) {//функция добавления в array1 первого значения из массива array2
    let valueFromQuestion = (prompt(`${questionString}:
${outputValueWithIndex(array2)}`));

if (array2.indexOf(valueFromQuestion) == -1 && array2[+valueFromQuestion-1] == undefined) {
    return alert('Такой задачи не существует');
}
else if (array2[+valueFromQuestion-1] !== undefined) {
    return array1.push(...(array2.splice(array2.indexOf(array2[+valueFromQuestion-1]),1)))
}
else {
    return array1.push(...(array2.splice(array2.indexOf(valueFromQuestion),1)))
}
}



while (!(isTasksEmpty(availableTasks) && isTasksEmpty(progressTasks))) {
const addTask = confirm(`Список выполняемых задач на текущий момент: 
${!isTasksEmpty(progressTasks) ? outputValueWithIndex(progressTasks):'Отсутствует'}

Хотите добавить новую задачу?`);
    if (addTask) { //если нажал yes
        if (!isTasksEmpty(availableTasks)) { // если есть задания которые можно взять
            addTaskToArray(progressTasks,availableTasks,'Доступные задачи для добавления');

        } else if (isTasksEmpty(availableTasks)&&isTasksEmpty(progressTasks)) { // если нет Новых, и текущих задач
            showAllTasksCompleteALert();
        }  else { // если нет новых, но есть текущие
            addTaskToArray(doneTasks,progressTasks,'Новых доступных задач нет.Какую задачу вы выполнили?');
        }
    }
    else { // если нажал no
        if (!isTasksEmpty(progressTasks)) {
            addTaskToArray(doneTasks,progressTasks,'Какую задачу вы выполнили?');
        } else {
            break;
        }
    }
} 
showAllTasksCompleteALert();