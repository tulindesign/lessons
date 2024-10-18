// Замаскировать все кроме последних 4х символов *.


const card = '23458234728937428374'; // 20

let hiddenCard = card.slice(-4).padStart(card.length,'*');

console.log(card);
console.log(hiddenCard);

