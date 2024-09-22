// Switch

const role = prompt('Введите должность'); 

/*
if (role === 'manager') {
    console.log('Менеджер');
}
else if (role === 'admin') {
    console.log('Админ');
}
else if (role === 'CEO') {
    console.log('СЕО');
}
else {
    console.log('Мы тебя не знаем');
}*/
/*
switch (role) {
    case 'manager':
        console.log('Менеджер');
        break;
    case 'admin':
        console.log('Админ');
        break;
    case 'ceo': //role === 'CEO'
        console.log('СЕО');
        break;
    default: 
        console.log('Мы тебя не знаем');
        break;

}*/

switch (role) {
    case 'manager':
    case 'admin':
        console.log('Не руководитель');
        break;
    case 'ceo': //role === 'CEO'
        console.log('Руководитель');
        break;
    default: 
        console.log('Мы тебя не знаем');
        break;

}

const num = 10;

switch (true) {
    case num>0:
        console.log('Положительный');
        break;
    case num<0:
        consol3e.log('Отрицательный');
        break;
    default:
        console.log('Ноль!')

}