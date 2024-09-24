// Переписать функции в стрелочную 

function toPower(num, power) {
    const res = num ** power;
    return res;
}
console.log(toPower(2,3));

const toP = (num, power) => num ** power;
console.log(toP(2,3));