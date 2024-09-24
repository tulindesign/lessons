// Параметры по умолчанию

// function toPower(num = 4, power = 5) {
//     const res = num ** power;
//     return res;
// }
// console.log(toPower(2,3));
// console.log(toPower(2));

// const num = num ?? 10 - значение 10 если undefined или null


function toPower(num = prompt('Какое у вас число?'), power = prompt('В какую степерь возвести?')) {
    const res = num ** power;
    return res;
}
console.log(toPower(2,3));
console.log(toPower(22));
console.log(toPower());