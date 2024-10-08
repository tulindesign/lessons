
const arr = [1,2,4,4,10,20,30,40,50]

let elGT5;

// for (const el of arr) {
//     if (el > 5) {
//     elGT5 = el;
//     break;
// }
// }



elGT5 = arr.find((el) => el  > 5);
console.log(elGT5);
 
elGT5 = arr.findIndex((el) => el  > 5);
console.log(elGT5);
