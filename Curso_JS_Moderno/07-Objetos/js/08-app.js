// Congelar un objeto para no poderlo modificar
"use strict";

const producto = {
    nombre     : "Portatil ACER",
    precio     : 459.99,
    disponible : true,

}

Object.freeze( producto ); // COn esto bloqueamos el objeto para no ser modificado ni elimnar un elemento

// producto.imagen = '.../jpg/imagen.jpg'
// producto.precio = 450.99
// delete producto.disponible;

console.log( producto );

// comprobar si un objeto está congelado.
console.log( Object.isFrozen( producto ) );