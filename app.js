// Упражнение проверка номера

/* проверить является ли это номером телефона России */

/*Верные*/
const num1 = '89325427969';
const num2 = '+79325427969';
const num3 = '+7(932)5427969';
const num4 = '8(932) 542-79-69';
const num5 = '  +7(932) 542-79-69   ';

/*Не верные*/
const num1Error = '893254279';
const num2Error = '7+7d9325427969';
const num3Error = '9+9325427969';
const num4Error = '+79 32g5427969';

function isNumber(str) {
  str = str.trim(); // убираем пробелы у исходника
  let numberToFormat = str;
  numberToFormat = numberToFormat.replace('+7','8'); // чистим от +7 в пользу 8;
  numberToFormat = numberToFormat.replaceAll('(',''); // чистим от (;
  numberToFormat = numberToFormat.replaceAll(')',''); // чистим от );
  numberToFormat = numberToFormat.replaceAll('-',''); // чистим от тире;
  numberToFormat = numberToFormat.replaceAll(' ',''); // чистим от пробелов;

  if (numberToFormat.length !== 11 || isNaN((Number(numberToFormat)))) { // проверка на длину и цифры ли
    return `${str} - Не правильный номер РФ`;
  } else {
      numberToFormat = numberToFormat.split('');
      numberToFormat.splice(0, 1, '+','7');
      numberToFormat.splice(2, 0, ' ', '(');
      numberToFormat.splice(7, 0, ')', ' ');
      numberToFormat.splice(12, 0, '-');
      numberToFormat.splice(15, 0, '-');
      numberToFormat = numberToFormat.join('');
      return `
${str} - номер РФ
${numberToFormat} - в правильном формате

`;
  }
}

console.log(isNumber(num1));
console.log(isNumber(num2));
console.log(isNumber(num3));
console.log(isNumber(num4));
console.log(isNumber(num5));
console.log(isNumber(num1Error));
console.log(isNumber(num2Error));
console.log(isNumber(num3Error));
console.log(isNumber(num4Error));