'use strict'
// call, apply

const audi = {
  mark: 'Audi',
  model: 'A3',
  year: 2021,
  damages: [

  ],
};

const carManipulation = {
  addDamage(part, rate) {
    this.damages.push({part, rate})
    console.log(`Повреждение ${this.mark} ${this.model}: ${part} ${rate}`)
  }
}

const addDamageAudi = carManipulation.addDamage.bind(audi); //связали с объектом audi

addDamageAudi('Крыло',3);


const addDamageAudiRoof = carManipulation.addDamage.bind(audi, 'Крыша'); //связали с объектом audi и аргумент part = Крыша


addDamageAudiRoof(3);