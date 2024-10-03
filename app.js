// // Цикл while
// let i = 1;
// while (i<=10) { // Проверка ДО
//     console.log(`Вывод - ${i}`);
//     i++;
// }


// const arr = [1,4,8,7]
// let j=0;
// while (arr[j] <= 5 && j < arr.length) { // Проверка ДО
//     console.log(arr[j]);
//     j++;
// }

// let k = 0;
// do { // Проверка ПОСЛЕ 1 выполнения
// console.log(`k - ${k}`)
// k++
// } while( k < 0)



// 
console.log('---------------');

const arr2 = [1,4,8,7,12,15,16];
let q = -1;
while (q < arr2.length) { // Проверка ДО
   q++;
    if (arr2[q] == 8) {
      console.log('пропустил 8');
      continue;
     } 
     console.log(arr2[q]);
}