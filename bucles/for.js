//calcular el factorial de 10 utilizando un solo bucle for

function factorial(n){
  let respuesta = 1;
  for(var i=n; i > 1; i--){
    respuesta = respuesta * i;
    console.log(respuesta);
  }
  return respuesta;
}
let n = 10;
respuesta = factorial(n);
console.log("el factorial de "+ n +" es: "+ respuesta);