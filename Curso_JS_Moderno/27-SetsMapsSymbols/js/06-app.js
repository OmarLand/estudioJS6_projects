// Iterador personalizado propio

const crearIterador = ( carrito ) =>{
    let i = 0;

    return {
        siguiente: () =>{
            const fin   = ( i >= carrito.length ) ;
            const valor = !fin ? carrito[i++]: undefined;

            return{
                fin,
                valor
            }
        }
    }
}

const carrito = ['Producto_1','Producto_2','Producto_3',];

// Utilizar el iterador
const recorrerCarrito = crearIterador(carrito);

console.log( recorrerCarrito.siguiente() );
console.log( recorrerCarrito.siguiente() );
console.log( recorrerCarrito.siguiente() );
console.log( recorrerCarrito.siguiente() );

// console.log( carrito.length );
