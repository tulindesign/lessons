// Условие в функции

// function canAccessWebsite(age = prompt('сколько лет')) {
//    text = age >= 18 ? 'Go':"No";
//     return text;
// }
// console.log(canAccessWebsite());




// function canAccessWebsite(age = prompt('сколько лет')) {
//   return (age >= 18) ? true:false;
//  }
//  console.log(canAccessWebsite() === true ? 'Go': 'No');



 const canAccessWebsiteArrow = (age = prompt('Ваш возраст')) => {return age >= 18};
 
 console.log(canAccessWebsiteArrow() === true ? 'Доступ разрешен': 'Нет доступа');