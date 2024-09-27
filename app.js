// Slice, Splice, concat, reverse
const roles = ['users','admin','manager','superuser'];

console.log(roles);

/*
slice - вырезает, но не изменяет исходный массив
использовать например если нужно взять часть массива и куда-то положить
*/
const res = roles.slice(2); // срезать (N) элементов в начале
console.log(res);

const res2 = roles.slice(2,3); // срезать (N,X) элементов  N - первый элемент, X - последний, но не включая
console.log(res2);

const res3 = roles.slice(-1); // вырезать (-1) 1 с конца
console.log(res3);

const res4 = roles.slice(0,-1); // срезать от 0 до последнего (не включая)
console.log(res4);


/*
splice - вырезает в ИСХОДНОМ
*/
const res6 = roles.splice(1,3); // N - начальный индекс, X - количество - ДЛИНА
console.log(res6);
console.log(roles);


/*
reverse - делает инверсию в ИСХОДНОМ
*/
const food = ['apple','orange','banana','lemon'];
console.log(food);

const res9 = food.reverse(); 
console.log(res9);

/*
concat - добавляет в массив в переменную, не в исходную
*/
const newfood = ['meat','fish'];
const res10 = food.concat(newfood);
console.log(res10);

food.unshift(...newfood);
console.log(food);