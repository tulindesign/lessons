/* 
Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме вхыодных). К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней. Выведите в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/
const hourPrice = 80; // 80$ в час
const dayPerHours = 5; // 5 часов в день
const daysPerWeek = 5; // 5 дней в неделю;
const daysLeave = 11;
const clientWorkHours =  40; // 40 часов по 5 часов в день = дни

//- Boolean переменную успеете ли вы взяться за работу
let isIWork = (clientWorkHours/dayPerHours+2) < daysLeave // (40 часов рабочий / 5 часовой рабочий день  = дни) + 2 дня выходных < 11 дней до выезда)
console.log(isIWork);
// - Сколько вы за неё попросите? 3200 (80 * 40)
let priceForWork = clientWorkHours * hourPrice
console.log(priceForWork);


//вариант с курса
const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11-2) * 5;

// результат
console.log('Смогу ли я работать? ' + (availableHours > projectHours));
console.log('Стоимость работ: ' + (projectHours * payRateUSD) + '$');