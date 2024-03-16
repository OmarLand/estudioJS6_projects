// Sellar un objeto para agregar ni eliminar objeto pero SÍ Modificar
"use strict";

const producto = {
    nombre     : "Portatil ACER",
    precio     : 459.99,
    disponible : true,

}

Object.seal( producto ); // COn esto bloqueamos el objeto para no ser eliminado ni agregar elementos pero SÍ modificar

// producto.imagen = '.../jpg/imagen.jpg'
producto.precio = 850.99
// delete producto.disponible;

console.log( producto );

// comprobar si un objeto está congelado.
console.log( Object.isSealed( producto ) );