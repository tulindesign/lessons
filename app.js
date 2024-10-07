function power(pow) {
    return function(num) {
        return num**pow;
    }
}



const powerOfTwo = power(2);
console.log(powerOfTwo(5));



const powerOfThree = power(3);
console.log(powerOfThree(5));


console.log(power(5)(4));




let abcd = (a,b) => (c,d) => (a+b)*(c+d);
console.log(abcd(2,2)(1,1));