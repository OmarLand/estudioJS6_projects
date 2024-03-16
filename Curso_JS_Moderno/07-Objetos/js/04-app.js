// Destructuring

const producto = {
    nombre     : "Portatil ACER",
    precio     : 459.99,
    disponible : true,
}


const { nombre, precio } = producto;

console.log( nombre, precio );