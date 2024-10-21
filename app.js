// ссылки и копирование

let objA = {
  date: '09.04.1994',
  fullName: 'Tulin Timofei Vladimirovich',
  city: 'Orenburg',
  objects: [
    {
      name:'lol',
      insideObj: [
        {
          name:1
        },
        {
          name:2
        },
      ]
    },
    {
      name:'lol2'
    },
    {
      name:'lol3'
    },
  ],
}

let objB = structuredClone(objA) // все уровни
let objC = {...objA} // копирует ток первый уровень, все остальное ссылки
objA.fullName = 'a';
objA.objects[0].insideObj[0].name = null;
objA.objects.name = null;
console.log(objA.objects[0].insideObj[0].name);

console.log(objB.objects[0].insideObj[0].name);

