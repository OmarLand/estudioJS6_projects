// COntinue y Break ¿Pra que sirven?

// for( let i = 1; i <= 10;  i++){

//     if( i ===5 ){
//         console.log(`Este es el: CINCO ${i}`);
//         // break;
//         continue;
//     }

//     console.log(`Número: ${i} `);
// }



const carrito = [
    { nombre : 'PS4', precio : 350 },
    { nombre : 'Teclado Gamer', precio : 50, descuento : true },
    { nombre : 'Monitor 19inch', precio : 45 },
    { nombre : 'mouse', precio : 35 },
    { nombre : 'Lampara escritorio', precio : 15 },
    { nombre : 'Alexa Echo Show 8', precio : 50 },
]

for( let i = 0; i <= carrito.length-1; i++ ){

    if( carrito[i].descuento ){
        console.log(`El artículo ${carrito[i].nombre} tiene descuento`);
        continue;
    }

    console.log( carrito[i].nombre );
}