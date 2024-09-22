/* 
    Васи положили 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц.

    Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после снятия вклада. И остаток после покупки

    Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцх
*/

const balance = 12000; // 12 000$ баланс Васи
const balanceStavka = 0.07/12 // 7% годовых
const depositMonths = 24;
const housePrice = 13500; // 13 500$ стоимость дома

const res = balance * (1 + balanceStavka) ** depositMonths;


if (res > housePrice) {
    console.log('Вася может купить дом через 2 года');
    console.log(`Вася накопил ${res}`);
    console.log(`Остаток на балансе составит ${res - housePrice}$`)
} else {
    
    console.log('Вася не сможет купить дом через 2 года');
    console.log(`Вася накопил ${res}`);
    console.log(`Ему не хватит ${res - housePrice}$`)
}