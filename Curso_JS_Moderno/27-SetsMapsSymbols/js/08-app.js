const ciudades = ['Londres','Madrid','Paris','Bruselas','Tokio'];
const ordenes = new Set([123,456,788,102]);

const datos   = new Map();
datos.set('nombre', 'Omar');
datos.set('profesion','docente');

for( let entry of ciudades.entries() ){
    console.log( entry);
}

for( let entry of ordenes.entries() ){
    console.log( entry);
}

for( let entry of datos.entries() ){
    console.log( entry);
}

// values iterador - Muestra el valor sin las llaves
for( let value of ciudades.values() ){
    console.log( value );
}

for( let value of datos.values() ){
    console.log( value );   
}

