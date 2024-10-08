
/* 
Найти среднее значение последовательных чисел с помощью reduce
*/
const arr = [1,4,4,10]


const averageValueOfArray = arr.reduce((sum,value,i) => {
   if (i != arr.length - 1) { // если не последний
        return sum + value; 
   } return (sum + value)/(i+1); //последний - сумма/кол-во элементов
}, 0);

console.log(`Среднее значение массива: ${averageValueOfArray}$`);