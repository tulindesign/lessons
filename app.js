const operations = [100, -20, 7, -30, 50];
// let balance = 0;
// for (let operation of operations) {
//     balance += operation;
// }
// console.log(balance);



// acc - темп переменная куда складывается операция
// value - текущее значение массива
// i - номер операции
const finalBalance = operations.reduce((acc,value, i) => {
    console.log(`Операция ${i+1}, Текущий баланс: ${acc}, Операция: ${value}$`);
    return acc += value;
}, 0); // значение по умолчанию (аля let finalBalance = 0)

console.log(`Итого: ${finalBalance}$`);


const minElement = operations.reduce((min,value, i) => {
    return min < value ? min: min = value;
}, 0); // значение по умолчанию (аля let finalBalance = 0)

console.log(`Минимальный элемент: ${minElement}$`);