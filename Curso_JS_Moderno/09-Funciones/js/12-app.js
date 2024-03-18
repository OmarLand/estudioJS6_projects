// Iterando con un .map y .forEach ( diferencias )
const carrito = [
    { nombre : 'PS4', precio : 350 },
    { nombre : 'Teclado Gamer', precio : 50 },
    { nombre : 'Monitor 19inch', precio : 45 },
    { nombre : 'mouse', precio : 35 },
    { nombre : 'Lampara escritorio', precio : 15 },
    { nombre : 'Alexa Echo Show 8', precio : 50 },
]


//console.log( "\n##### CON EL .FOREACH #####" );
carrito.forEach( producto => console.log( `${producto.nombre} - ${producto.precio}` ) );

//console.log( "\n##### CON EL .MAP #####" ); // El map crea un nuevo arreglo - Almacena los elementos de un arreglo en un nuevo arreglo
const newArray2 = carrito.map( (producto) =>`${producto.nombre} - ${producto.precio}` );
console.log("\nResultado con el .map >>>", newArray2 );