/*

Есть выгрузка операций пользователя
const operations = [1000, -700, 300, -500, 10000];
а также начальный баланс в 100$

Необходимо сделать функции расчета:
- Итогового баланса
- Наличие отрицательного баланса (если после очередной операции баланс <0, то выдавать false)
- Расчет среднего расхода и среднего дохода

*/


// мой вариант
// const operations = [1000, -700, 300, -2500, 10000];
// let startBalance = 100;
// let expandBalance = [0,[]];
// let incomeBalance = [0,[]];


// console.log(`Текущий баланс ${startBalance}$`)
// for(let arrEachValue of operations) {


//    if (arrEachValue < 0) {
//       expandBalance[0] += arrEachValue;
//       expandBalance[1].push(arrEachValue);
//       if ((startBalance + arrEachValue)<0) {
//          console.log('Нехватает денег');
//          break;
//       } else {
//          console.log(`Расход на сумму ${arrEachValue}$`);
//          startBalance += arrEachValue;
//       }

//    } else  {

//       incomeBalance.push(arrEachValue);
//       incomeBalance[0] += arrEachValue;
//       incomeBalance[1].push(arrEachValue);
//       console.log(`Пополнение на сумму ${arrEachValue}$`);
//       startBalance += arrEachValue;
//       console.log(startBalance)
//    }
   
// }

// console.log(`
// Итоговый баланс: 
// ${startBalance}$`);


// console.log(`
// Расход / Средний расход: 
// ${expandBalance[0]}$ / ${(expandBalance[0]/expandBalance[1].length)}$`);


// console.log(`
// Доход / Средний доход: 
// ${incomeBalance[0]}$ / ${(incomeBalance[0]/incomeBalance[1].length)}$`);



//Ваирант с урока + правки

const operations = [1000, -700, 300, -500, 10000];
let startBalance = 100;


function getBalance(arrayOfOperations, initialBalance) { // сумма всех значений + начальный баланс
   let balance = initialBalance;
   for (const element of arrayOfOperations) {
      balance += element;
   }
   return balance;
}

function checkOperations(arrayOfOperations, initialBalance) {//функция проверки операции, и стоп её если баланс отрицательный
   let balance = initialBalance;
   let isOk = true;
   for (const element of arrayOfOperations) {
      if ((balance+element)<0) {
         console.log(`Операция ${element}$ недоступна. Недостаточно средств`);
         isOk = false;
         break;
      } else {
      balance += element;
      console.log(`Операция на сумму ${element}$`);
       }
   }
   return isOk;
}

function sumOfOperations(arrayOfOperations,typeOfOperations){
   let arrayOfTypeOperations = [0,[]];
   for (const element of arrayOfOperations) {
      if(element > 0 == typeOfOperations) {
         arrayOfTypeOperations[0] += element;
         arrayOfTypeOperations[1].push(element);
      } 
   }
   arrayOfTypeOperations.push(arrayOfTypeOperations[0]/arrayOfTypeOperations[1].length);


   return arrayOfTypeOperations;
}


console.log(`Стартовый баланс: ${startBalance}$`);
console.log(checkOperations(operations,startBalance));

console.log('-------------')
console.log(`Общий доход: ${sumOfOperations(operations,true)[0]}$`);
console.log(`Средний доход: ${sumOfOperations(operations,true)[2]}$`);
console.log('-------------')
console.log(`Общий расход: ${sumOfOperations(operations,false)[0]}$`);
console.log(`Средний расход: ${sumOfOperations(operations,false)[2]}$`);