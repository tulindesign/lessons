const operations = [100, -20, 7, -20, 50];
// const positiveOperations = [];
// const negativeOperations = [];
// for (const value of operations) {
//     if (value > 0) {
//         positiveOperations.push(value);
//     } else {
//         negativeOperations.push(value);
//     }
// }
// console.log(positiveOperations);
// console.log(negativeOperations);



const positiveRUBOperations = operations
    .filter(operation => {
    return operation > 0;
    })
    .map((operation,i) => {
        return `${i+1}. ${operation*100}`
    })
    .join('\n');

    const negativeRUBOperations = operations
    .filter(operation => {
    return operation < 0;
    })
    .map((operation,i) => {
        return `${i+1}. ${operation*100}`
    })
    .join('\n');


console.log(`Доходы:
${positiveRUBOperations}`);
    
console.log(`Расходы:
${negativeRUBOperations}`);
