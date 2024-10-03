// цилк for of и for in


const arr = [[1,2,3,4],[5,6,7,8]];


for (let element of arr) { // просто перебрать массив, если индекс не нужен
   console.log(`тут я вывожу каждое значение массива`);
   console.log(element);
   for (let elementOfElement of (element)) {
      console.log(elementOfElement);
   }
}


for (let index in arr) { // вывести индекс
   console.log(index);
}