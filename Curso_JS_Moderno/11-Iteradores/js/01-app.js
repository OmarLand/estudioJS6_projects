// Ciclo for loop...

// for( let i = 1; i <= 10;  i++){
//     console.log(`Número: ${i} `);
// }


// for( let i=1; i <= 20; i++ ){
//     if( i % 2 === 0 ){
//         console.log(`El número es par: ${i}`);
//     } else {
//         console.log(`El número es impar: ${i}`);
//     }
// }


const carrito = [
    { nombre : 'PS4', precio : 350 },
    { nombre : 'Teclado Gamer', precio : 50 },
    { nombre : 'Monitor 19inch', precio : 45 },
    { nombre : 'mouse', precio : 35 },
    { nombre : 'Lampara escritorio', precio : 15 },
    { nombre : 'Alexa Echo Show 8', precio : 50 },
]

for( let i = 0; i <= carrito.length-1; i++ ){
    console.log( carrito[i].nombre );
}