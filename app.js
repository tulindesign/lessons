// Упражнение - проверка прав
/* 
ПОльзователь хочет приобрести игру в магазине. 
Он может это сделать только если:
- Его баланс больше 1000 (balance)
или число бонусов больше 100 (bonusBalance)
- Он не забанен (isBanned)
- Игра не раскуплена (isExist)
- Игра в продаже (isSelling)

Напишите условие для покупки и выведите в консоль результат

*/
const gamePriceRub = 1000;
const gamePriceBonus = 100;
const gamePrice = gamePriceRub || gamePriceBonus;
const isBanned = false;
const isExist = true;
const isSelling = true;
let bonusBalance;

console.log(`Продается игра
    Стоимость: ${gamePriceRub} руб. / ${gamePriceBonus} бонусов.
    В налиии и в продаже: ${(isExist || isSelling)? 'Да' : 'Нет'}.
    Вы можете купить (не забанены): ${!isBanned ? 'Да' : 'Нет'}.
    `);

const balance = prompt('Сколько денег на балансе?');

if (balance < gamePriceRub) { 
    bonusBalance = prompt('Сколько бонусов?');
    if (bonusBalance > gamePriceBonus) { 
        console.log(`Можно купить за бонусоы, останется ${bonusBalance - gamePriceBonus}`); 
    } else {
        console.log(`Вам не хватает ${gamePriceBonus - bonusBalance} бонусов или ${gamePriceRub - balance} рублей`)
    }
} else {
    console.log(`Можно купить, сдача ${balance - gamePriceRub}`); 
}

//доп без логики
console.log((balance > gamePriceRub || bonusBalance > gamePriceBonus) && !isBanned && isExist && isSelling ?'Пользак может купить':'Пользак не может купить');