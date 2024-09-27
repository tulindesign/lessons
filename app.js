// из строки в массив и обратно
const roles = ['users','admin','manager','superuser'];
const url = 'auth/user/login';
const res = url.split('/');
console.log(res);

console.log(roles.join('-'));

