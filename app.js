const myChildren = [];
myChildren.push('Mila'); //добавить последним
myChildren.push('Alice'); //добавить последним

console.log(myChildren); 


myChildren.unshift('Firstchild'); // добавить первого в массив
console.log(myChildren); 
myChildren.push('Last-child');
console.log(myChildren); 

// если нам надо вывести значение удаляемого то положить в переменную
const delFirst =  myChildren.shift(); // удалит первого
const delLast=  myChildren.pop(); // удалит последнего
console.log(`Удалил ${delFirst}`); 
console.log(`Удалил ${delLast}`); 
console.log(myChildren); 



console.log(myChildren.indexOf('Mila')>=0?'Мила родилась':'Мила еще не родилась') // возвращает индекс элемента если найден, или -1 если не найден
console.log(myChildren.includes('Mila')?'Мила родилась':'Мила еще не родилась') // true или false