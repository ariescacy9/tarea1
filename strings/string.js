// Una cadena de texto con tu Nombre
let nombre = "Cristian A."
console.log(nombre)
// Otra cadena de texto con tu Apellido
let Apellido = "Carhuas Y."
console.log(Apellido)
// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `hola mi nombre es: ${nombre} y mi apellido es: ${Apellido} `
console.log(estudiante)
// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)
// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)
// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let letras_y_espacios = estudiante.length
console.log(letras_y_espacios)
// Una variable que contenga la primera letra del Nombre
let primera_letra = nombre.charAt(0)
console.log(primera_letra)
// Otra variable que contenga la última letra del Apellido
let ultima_letra = Apellido.charAt(8)
console.log(ultima_letra)
// Una cadena de texto que elimine los espacios de la variable "estudiante"
let elimina_espacios = estudiante.split(" ").join("")
console.log(elimina_espacios)
// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let esta_contenida = estudiante.includes(nombre)
console.log(esta_contenida)