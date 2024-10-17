// вырезать из массива значения
//variant 1
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < a || arr[i] > b) {
            arr.splice(i,1);
            i--;
      } 
    }
  }
const numbers = [1,3,5,9,2,10,24,13]
console.log(numbers);
filterRangeInPlace(numbers,3,9)
console.log(numbers);

//variant 2
console.log('--------------')
function filterRangeInPlace2(arr, a, b) {
  tempArray = [];
  for (const [index,item] of arr.entries()) {
    if (item >= a && item <= b) {
      tempArray.push(arr[index]);
    } 
  }
  return arr.splice(0, arr.length, ...tempArray);
}
  
let numbers2 = [1,3,5,9,2,10,24,13]
console.log(numbers2);
filterRangeInPlace2(numbers2,3,9);
console.log(numbers2);

