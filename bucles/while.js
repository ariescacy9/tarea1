//calcular el factorial de 10 utilizando un bucle while

function factorial(n){
  let respuesta = 1;
  let i=n;
  while(i>1){
    respuesta = respuesta * i;
    i--;
    console.log(respuesta);
  }
  return respuesta;
}
let n = 10;
respuesta = factorial(n);
console.log("el factorial de "+ n +" es: "+ respuesta);