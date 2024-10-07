//forEach

const score = [5,10,0,15];



score.forEach((element,index) => { // элемент, индекс
    console.log(`${index+1}. ${element} `);
});


for(const [i,el] of score.entries()) {
    console.log(`Раунд ${i+1}: ${el}`);  
}