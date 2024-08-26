// Los generadores se conocen por tener un asteristo * antes del nombre de la función

function *crearGenerador(){
    yield 1;
    yield 'Omar';
    yield 4+4;
    yield true;
}


// const iterador = crearGenerador();

// console.log( iterador );
// console.log( iterador.next().value );
// console.log( iterador.next() );
// console.log( iterador.next().value );
// console.log( iterador.next() );
// console.log( iterador.next() );
// console.log( iterador );


// Generador para carrito de Compras

function *generadorCarrito(carrito){
    for ( let i = 0; i< carrito.length; i++ ){
        yield carrito[i];
    }
}


const carrito = ['Producto_1','Producto_2','Producto_3'];
const iterador = generadorCarrito(carrito)

console.log( iterador.next() );
console.log( iterador.next() );
console.log( iterador.next() );
console.log( iterador.next() );
