// Анонимные функции

console.log(powerOfTwo(2));
function powerOfTwo(num) {
    return num ** 2 ;
} // можем использовать ДО самой объявления самой фукнции в коде


const poft = function (num) {
    return num ** 2 ;
}

console.log(poft(4)); //использщвание только ПОСЛЕ объявления переменной функции)