// // Введение в функции
// function fromMilesToKm(miles) {
//     const km = miles / 0.62137;
//     return km;
// }

// /* 
// Ключевое слово - function
// Название fromMilesToKm
// Аргумент(ы) ()
// Возвращаемое значение return переменна;
// */

// console.log(fromMilesToKm(100));


// function logName(firstname, surname) {
//     console.log(`Мое имя ${firstname}
// Моя фамилия ${surname}`);
// }
// logName(firstname = prompt('Ваше имя?'),surname = prompt('Ваше фамилия?')); 

// function logName(firstname, surname) {
//     console.log(`Мое имя ${firstname}
// Моя фамилия ${surname}`);
// }
// logName(prompt('Ваше имя?'),prompt('Ваше фамилия?')); 


// function countDepositSum(depositInUsd, month, rate) {
//     return sum = depositInUsd * (1 + (rate/100)/ 12) ** month;
// }
// console.log(countDepositSum(1000,24,7));
// console.log(countDepositSum(2000,12,14));
// console.log(countDepositSum(3000,24,7));




// function countDepositSum(depositInUsd, month, rate) {
//     const sum = depositInUsd * (1 + (rate/100)/12) ** month;
//     console.log(`Сумма через ${month} месяца, с входными ${depositInUsd}$ и ставкой ${rate}% годовых = ${sum}$ `);
//     return sum;

// }
// const countedDepositSum = countDepositSum(prompt('Сколько у вас денег'),prompt('Срок вклада в месяцах'),prompt('Ставка в %'));



function countDepositSum(depositInUsd, month, rate) {
    const sum = depositInUsd * (1 + (rate/100)/12) ** month;
    return sum;
}
const depositInUsd = prompt('Сколько у вас денег');
const month = prompt('Срок вклада в месяцах');;
const rate = prompt('Ставка в %');

console.log(`Сумма через ${month} месяца, с входными ${depositInUsd}$ и ставкой ${rate}% годовых = ${countDepositSum(month,depositInUsd,rate)}$`);


