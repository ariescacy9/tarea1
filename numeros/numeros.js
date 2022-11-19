// Una variable que contenga tu altura en centímetros (entero)
let alturaCm=159
console.log(alturaCm);

// Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMt=1.59
console.log(alturaMt);

//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoKl=60.200
console.log(pesoKl);

// Una variable que contenga tu altura en metros redondeada hacia arriba
let redondeoSup = Math.round(alturaMt)
console.log(redondeoSup);

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let redondeoInf = Math.floor(pesoKl)
console.log(redondeoInf);

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let maximoValor = Number.MAX_VALUE
let sumaMax = maximoValor + 1
console.log(maximoValor + " = " + sumaMax);