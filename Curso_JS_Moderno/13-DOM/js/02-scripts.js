// Uso de elementos por su clase a través del DOm

const header = document.getElementsByClassName('header')
console.log( header );


const hero = document.getElementsByClassName('hero');
console.log( hero );


// Si las clases existen más de 1 vez
const contenedores = document.getElementsByClassName(`contenedor`);
console.log( contenedores );


// En caso de que seleccione una clase que no exista
const noExiste = document.getElementsByClassName('no-existe');
console.log( noExiste );