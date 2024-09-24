// Функции в функциях

const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calcW(present) {
    return present * KG_IN_USD;
}
function calcKM(distance) {
    return distance * KM_IN_USD;
}

function getExchangePrice(present1, present2, distance) {
    console.log(`Сумма КГ подарков в $ = ${calcW(present1+present2)}`);
    console.log(`Дистанция в $ = ${calcKM(distance)}`)
    return calcW(present1+present2) + calcKM(distance);;
}
console.log(getExchangePrice(1,2,10));