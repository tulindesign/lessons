// // Операторы с другими типами

// console.log('Вася' || 'Олег'); // Вася, т.к ПЕРВЫЙ и если 
// console.log(false || 'Олег'); // Олег, т.к. первый false 
// console.log('Вася' || false); // Вася, т.к. первый / true
// console.log(false || false); //false


// console.log('Вася' && 'Олег'); // Олег, т.к. он последний 
// console.log(false && 'Олег'); //false, т.к. есть хотябы 1 false
// console.log(false && 'Олег'); //false, т.к. есть хотябы 1 false
// console.log(false && false); //false


let a;
const userName = a || 'Петя';
console.log(userName); // Петя, т.к. a = undefined

const isAdmin = prompt('Вы админ? Да(1) Нет (0)');
 

const fileName = (isAdmin == Boolean(1) ? true : false) && 'file.mp4';
console.log(fileName); // file.mp4 