// Iterando con un .forEach
const carrito = [
    { nombre : 'PS4', precio : 350 },
    { nombre : 'Teclado Gamer', precio : 50 },
    { nombre : 'Monitor 19inch', precio : 45 },
    { nombre : 'mouse', precio : 35 },
    { nombre : 'Lampara escritorio', precio : 15 },
    { nombre : 'Alexa Echo Show 8', precio : 50 },
]

for( let i = 0; i <= carrito.length-1; i++ ){
    console.log( `${carrito[i].nombre} - ${carrito[i].precio}€`);
}

console.log( "\n##### CON EL FOREACH #####" );
carrito.forEach(producto => {
    console.log( `${producto.nombre} - ${producto.precio}` );
});