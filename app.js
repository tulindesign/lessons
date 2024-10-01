// Цикл в цикле
// for (let i=1; i<=4; i++) {
//     console.log(`Цикл 1 - ${i}`);
//     for (let j=1; j <5; j++) {
//         console.log(`---цикл 2 - ${j}`);
//     }
// } 


const tasks = [[1, 'Задача1'], [2,'Задача 2']];

for (i = 0; i<tasks.length; i++) {
    console.log(tasks[i]);
    for (j=0; j<tasks[i].length; j++) {
    console.log(`Массив ${i}. Значение ${j}`);
    }
}