// break и continue
const tasks = ['Задача 1', 'continue','Задача 3','Задача 4','break','Задача 6'];


for(let i=0; i < tasks.length; i++) {
    if ((tasks[i]) == 'continue') {
        continue;
    } else if ((tasks[i]) == 'break') {
       break; 
    }
    console.log(tasks[i]);       
} 