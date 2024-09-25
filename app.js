// Упражнение - Кредит на macbook

/* 
Пользователь:
- Возраст
- Наличие работы
- Деньги
Нужно проверить может ли он купить новый Macbook за 2000$?
Он может брать не только за свои деньги, но и взять кредит. 
Кредит ему дадут 500$, только если ему больше 24 лет и он имеет работу, 100$ если ему просто больше 24х лет и 0 в ином случае
Напишите функциюю, которая принимает данные пользователя и товара и возвращает true или false;
*/




// Вариант с курса
// function creditMoney(age,hasJob = false) {
//     return (age>=24&&hasJob==1)?500:age>=24?100:0
// }
// function canBuy(macbookPrice, age, money, hasJob = false) {
//     return macbookPrice <= money + creditMoney(age,hasJob);
// }
// console.log(canBuy(1024,Number(prompt('Сколько лет')),Number(prompt('Сколько денег сейчас есть?')),Boolean(prompt('Есть ли работа? Да(1) Нет(0)')==1)));


const age = Number(prompt('Сколько лет'));
const work = Number(prompt('Есть ли работа? Да(1) Нет(0)'));
const money = Number(prompt('Сколько денег сейчас есть?'));
const macbookPrice = 2000;
function creditMoney() {
    return (age>=24&&work)?500:age>=24?100:0
}
function canBuy() {
    return (money + creditMoney())>=macbookPrice
}
console.log(`Возраст: ${age} лет.
Работа: ${work==1?'Есть':'Отсутствует'}.
Баланс: ${money}$.
Доступный кредит: ${creditMoney()}$.`);
if (canBuy()) {
    console.log(`После покупки остаток составит: ${money + creditMoney() - macbookPrice}$`)
} else {
    console.log(`Покупка недоступна. Нехватает: ${macbookPrice - (money + creditMoney())}$`)
}