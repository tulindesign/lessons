//Проверка робота

/* Меотодом promt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15". 
Если ответ верен введите в консоль "Успех", 
если нет - "Вы робот!", 
а если он введет "Я не робот", то тоже успех'

*/

const question = prompt('Сколько будет 7 + или -15?'); // 7+15 = 22, 7-15 = -8

/*
const message =  
question == 22 // if
? "Успех" // вариант 1
: question == -8  // else if
? "Успех"  // вариант 2
: question == 'Я не робот' // else if
? "Успех"  // вариант 3
: 'Вы робот!' // else
console.log(`${message}`);

*/


if (question === 'Я не робот') {
    console.log('Успех');
} else {
    const resNumber = Number(question);
    switch(resNumber) {
        case 22:
        case -8:
            console.log('Успех');
            break;
        default:
            console.log('Ты робот!');
    }

}



const message =  
question == 22 // if
? "Успех" // вариант 1
: question == -8  // else if
? "Успех"  // вариант 2
: question == 'Я не робот' // else if
? "Успех"  // вариант 3
: 'Вы робот!' // else
console.log(`${message}`);


//доп тест
let serverdata = null
const defaultimg = serverdata === null ? 'default' : 'загрузилась дата';

console.log(`${defaultimg}`);


//доп тест
let balance = 600;
console.log(`${balance>1000 
    ? 'Круто баланса хватит' 
    : balance < 599 
    ? 'Баланса мало'
    : 'ни на че не хватит'
}`)