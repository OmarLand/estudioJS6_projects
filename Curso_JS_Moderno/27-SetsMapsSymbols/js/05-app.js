// Us de los symbols

const sym  = Symbol('1');
const sym2 = Symbol('1');

// if (sym === sym2) {
//     console.log('Son Iguales');
// } else {
//     console.log('No son iguales');
    
// }

const nombre   = Symbol();
const apellido = Symbol();

const persona = {}

// Agregar nombre y apellido como llaves del objeto
persona[nombre]     = 'Omar';
persona[apellido]   = 'Landaeta';
persona.tipoCliente = 'VIP';
persona.saldo       = 1000;

//console.log( persona );

// LAs propiedades que utilizan un symbol no son iterables
for( let i in persona ){
    console.log( i );
}

// Definir una descripcion del symbol:
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};

cliente[nombreCliente] = 'Omar'
console.log( cliente );


