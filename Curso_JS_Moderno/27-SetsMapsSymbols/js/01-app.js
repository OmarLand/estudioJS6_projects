const carrito = new Set();

carrito.add('Hola') // add añade elemento al set
carrito.add('Disco 1')
carrito.add('Disco 2')
carrito.add('Disco 3')

//carrito.delete('Disco 2')

console.log(carrito);

console.log( carrito.has('Hola') ); // has comprueba si existe o no un valor en el Set
console.log( carrito.has('Holaaa') );

console.log( carrito.size ); // size comprueba la longitud del set

//console.log( carrito.clear() );

// Los set son iterables con forEach
carrito.forEach( producto =>{
    console.log("> ", producto );
} )

// Eliminar numeros duplicados del siguiente arreglo:
let numeros = [10,20,30,40,5000,10,14,30,1,1,4,4,5,10,340];
let ordenar = numeros.sort()
ordenar = new Set(numeros);

console.log( "Numeros:", ordenar );
 