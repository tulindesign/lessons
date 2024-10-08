/* 
    Написать функцию, которые возвращает true,
    если элемент есть и false, если нет.
*/
const arr = [2,4,4,10,20,30,40,50]

// function some(array) {
//     questValue = +(prompt('Поиск по числу'));

//     if (array.find((element) => element === questValue)) {
//         return true;
//     } return false;
// }


// console.log(some(arr));




// function some2(array,element) {
//     element = +element;
//     const res = array.find(el => el === element);
//     return res !== undefined ? true: false;
// }
// console.log(some2(arr,prompt('Поиск по числу')));


console.log(arr.some(el => el === 0));