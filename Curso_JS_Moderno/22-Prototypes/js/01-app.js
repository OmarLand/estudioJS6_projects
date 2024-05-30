// Prototypes

const clientes = {
    nombre  : 'Omar',
    puesto  : 'CEO',
    costeHN : 25.5
}

console.log( clientes );

function Personal( nombre, puesto, costeHN ) {
    this.nombre  = nombre,
    this.puesto  = puesto,
    this.costeHN = costeHN
} 

const personal1 = new Personal( 'Omar','Gerente',45 );

console.log( personal1 );