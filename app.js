//if else

const money = 100 ;

if (money > 50) { // приоритет одинаковых выше, т.к. сначала выполняет первый
    console.log('Может купить наш продукт'); 
} 
else if (money > 50) {
    console.log('Куплен mini продукт');
}
else {
    console.log('Не может');    
}
console.log('Итог');