const prices = [[2,4], [3,4], [10, [20, 50]]];
const res = prices.flat(10); // сначала flat
const res2 = prices.flatMap((el,i) => `${i}.${el}`); //сначала map потом flat
console.log(res);
console.log(res2);