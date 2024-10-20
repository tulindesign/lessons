// Optional chain

let cities = {
  msk: {
    temp: {
      celcius: 25,
      kelvin: 40
    }
  },
  spb: {
    temp: 25
  }
}


const city = 'msk'
console.log(cities[city].temp);




console.log(cities[city]?.temp?.celcius);