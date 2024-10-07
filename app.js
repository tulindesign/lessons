function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}


function power(a,b) {
    return a**b;
}

function calculate(a,b,fn) {
    const res = fn(a,b);
    console.log(fn.name);
    return res;
}
console.log(calculate(3,3,add));
console.log(calculate(3,3,subtract));
console.log(calculate(3,2,power));