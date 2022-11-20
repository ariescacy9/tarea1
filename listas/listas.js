// Una variable que contenga la lista de la compra (mínimo 5 elementos)
let compra = ["camisa", "polo", "pantalon", "gorra", "zapato", "chompa"]
console.log(compra);
// Modifica la lista de la compra y añádele "Aceite de Girasol"
compra.push("Aceite de Girasol")
console.log(compra);
// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compra.pop("Aceite de Girasol")
console.log(compra);
// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculas = [ 
  {
    titulo: "bob esponga",
    director: "juanito",
    fecha: new Date(2022,5,21)
  },
  {
    titulo: "potter",
    director: "jhem",
    fecha: new Date(2009,9,30)
  },
  {
    titulo: "rapidos y furiosos",
    director: "tom",
    fecha: new Date(2021,11,31)
  }]
console.log(peliculas);
// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let pelis2010 = peliculas.filter((fechas)=>{return fechas.fecha >= new Date(2010,0,1)})
console.log(pelis2010);
// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let pelisDirectores = peliculas.map((directores)=>{return directores.director})
console.log(pelisDirectores);
// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let pelisTitulos = peliculas.map((titulos)=>{return titulos.titulo})
console.log(pelisTitulos);
// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let pelisDirectoresTitulos = pelisDirectores.concat(pelisTitulos)
console.log(pelisDirectoresTitulos);
// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let pelisDirectoresTitulos2 = [...pelisDirectores, ...pelisTitulos]
console.log(pelisDirectoresTitulos2);
