// Оператор нулевого слияния

let userName = '';
console.log(userName || 'Гость'); //игнорит 0, '', null, underfined)
console.log(userName ?? 'Гость');


let age = 0;
console.log(age || '18');//игнорит 0, '', null, underfined)
console.log(age ?? '18'); // 0