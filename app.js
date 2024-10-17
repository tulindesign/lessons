// Преобразование строки
const str = 'вася пупкина';
console.log(str.toLowerCase().includes('в'));
console.log(str.toLowerCase().startsWith('в'));
console.log(str.toLowerCase().endsWith('в'));



console.log(new String('Вася Пупкин').includes('а'))


console.log(str.replace(str[0],str[0].toUpperCase()))

console.log(str.replaceAll('а','ООО'));


console.log(str.replace(/а/g, 'и')); 


const str2 = ' Вася Пупкина    \n';
console.log(str2.trim()); 