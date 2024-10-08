/*
    Имеется массив изменения цен prices,
    где внутри
    1 элемент - цена в момент X
    2 элемент - цена в момент Y

    Нужно преобразовать данные в массив, где будут отображены только положительные изменения цен [100,150]
*/

const prices =[[100,200],[120,100],[200,350]];

const increasedPrice2 = prices
    .map(product => product[1] - product[0])
    .filter(price => price > 0);

console.log(increasedPrice2)