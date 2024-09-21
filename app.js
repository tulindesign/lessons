//Преобразование типов

const age = '18';
console.log(age + 5); // 185
console.log(Number(age) + 5); //23    Number(?)
console.log(age - 3); // минус, умножение, деление - думает что всегда цифры)
const userName = 'Вася';
console.log(userName + 5);
console.log(Number(userName) + 5); //не число, ошибка NaN
console.log(typeof NaN);
console.log(String(4) + 7) // Строка 4 + цифра 7 = всегда думает что String + string = 47
console.log(Boolean(0)); // все что не 0 - true
console.log(Boolean('')); // false = строка пустая
console.log(true + 2) // true = 1, 1 +2 = 3

const a = 2 + '10';
console.log(a - 10);