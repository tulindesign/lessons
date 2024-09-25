//Проверка на тип данных

function isString(message) {
    return typeof(message) == 'string'
}
console.log(isString('0'));
console.log(isString(0));


const isString2 = message2 => typeof(message2) == 'string'


console.log(isString2('0'));
console.log(isString2(0));


// Функция в функции
function isWater(waterML) {
    return waterML >= 200
}
console.log(isWater(200));

function isTea(teaBags) {
    return teaBags >= 1;
}
console.log(isTea(200));


function cupOfTea(waterML,teaBags) {
    cupOfTeaCan = isWater(waterML)&&isTea(teaBags) ? console.log(`${waterML/100} Кружек чая ты можешь сделать`) : console.log('Чая сделать не получится')
    return cupOfTeaCan;
}

cupOfTea(300,2);