const users = ['Вася','Яков','Маша','Катя','Аня', 'Ажга'];

users.sort()
console.log(users);
//map - новый, sort - старый


const operations = [100, -300, -100, 50, 480];




operations.sort((a,b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }


});

operations.sort((a,b) => b - a);

console.log(operations);