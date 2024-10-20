/*
  Сделать объект склад с методами добавления на склад, поиска по складу товара и расчет веса
*/

const car = {
  id: 1,
  weight: {
      kg: 1000
  },
  brand: 'Ford'
}
const chair = {
  id: 2,
  weight: {
      kg: 2
  }
}
const paper = {
  id: 3,
  color:'red'
}
const warehouse = {
  goods: [],
  findGoodByID: function(id) {
    return this.goods.find(item => item.id === id)
  },
  addGood: function(goodName) {
    if (goodName.id !== undefined && this.findGoodByID(goodName.id) === undefined) {
      this.goods.push(goodName);
      return `Товар добавлен. ID:${this.goods.at(-1).id}`
    } else if (this.findGoodByID(goodName.id) !== undefined) {
      console.log(this.findGoodByID(paper.id));
      return `Товар с ID ${goodName.id} уже добавлен. Попробуйте другой`
    }
    else return `Ошибка добавления товара. Отсутствует обязательные параметры: ID`
  },
  getWeightKG: function() {
    return this.goods.reduce((acc, el) => acc += el.weight?.kg ? el.weight.kg : 0,
    0)
  },
}


console.log(warehouse.addGood(car));
console.log(warehouse.addGood(chair));
console.log(warehouse.addGood(paper));
console.log(warehouse.addGood('paper2'));
console.log(warehouse.findGoodByID(3));
console.log(warehouse.getWeightKG());
console.log(warehouse);