//const datos = {};
const fecha = new Date();
const nacimiento = new Date(1994,3,8);

const datos = {
  nombre: "Cristian Alexander",
  edad: 28,
  eres_programador : true,
  fecha_nacimiento: nacimiento,
  libros_favoritos: {
    titulo: "harry Potter",
    autor: "J. K. Rowling",
    fecha: fecha,
    url: "https://www.buscalibre.com.mx/libro-harry-potter-y-la-camara-secreta-harry-potter-edicion-minalima-2/9788418637018/p/53685248"
  }
};

console.log(datos);