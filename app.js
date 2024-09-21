// Операторы присваивания
let age = 18 + 5;
age += 2; // age = age + 2
age -= 3; // age = age - 2
age *= 2; // age = age * 2
age /= 2; // age = age / 2

age++; // age = age + 1
age--; // age = age - 1

console.log(age);

// Операторы сравнения
const vasia = 20;
console.log(age > vasia); // 22 > 20 = true
console.log(age >= vasia); // 22 > 20 = true
console.log(age < vasia); // 22 > 20 = false
console.log(age <= vasia); // 22 > 20 = false
console.log(age == vasia); // 22 == 20 = false


// Порядок операторов
const isSuited = 100 - 10 > 90 - 5; // true
console.log(isSuited);

// 100 - (12приоиритет) 10 > (10приоиритет) 90 - (12приоиритет) 5


const a = (6 + 10) / 2
console.log(a);

let b;
let c;
c = b = 100 + 50;
console.log(c);
console.log(b);