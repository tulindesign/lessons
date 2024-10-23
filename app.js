'use strict'
// call, apply

const audi = {
  mark: 'Audi',
  model: 'A3',
  year: 2021,
  damages: [

  ],
  addDamage(part, rate) {
    console.log(
      `У авто ${this.mark}, ${this.model}, ${this.year} новое поврежедение:
${part} со степенью ${rate}`
  )
    this.damages.push(
      {
        part,
        rate
      }
    )
    return this;
  }
}


audi.addDamage('крыло','средняя').addDamage('капот','сильная').addDamage('дверь','легкая')


const bmw = {
  mark: 'BMW',
  model: 'X5',
  year: 2022,
  damages: [

  ],
}

bmw.addDamage = audi.addDamage;
bmw.addDamage('Бампер', 2);

const addDamageFunc = audi.addDamage;
// addDamageFunc('Бампер', 2);

addDamageFunc.call(bmw, 'Бампер', 2);
// nameOfFunction.call(object, arguments);


addDamageFunc.apply(bmw, ['Бампер', 2]);
