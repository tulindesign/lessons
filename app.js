// Упражнение - Цикл в обратном порядке

/* Задача вывести в консоль строку "Я люблю JS !" из массива.
Проходя циклом в обратном порядке не используя метов revrese.
*/

const arr = ['!', 'JS', 'люблю', 'Я'];

const newarr = [];

for (i=arr.length-1; i>=0; i--) {
    newarr.push(arr[i]);
}
console.log(newarr.join(' '));
console.log(arr.reverse().join(' '));