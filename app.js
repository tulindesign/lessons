// Деструктуризация
const userData = ['Антон',18,'Москва'];

function getData() {
    return ['Антон',18,'Москва'];
}

const [userName, _, userCity ] = getData();

console.log(userName,userCity);