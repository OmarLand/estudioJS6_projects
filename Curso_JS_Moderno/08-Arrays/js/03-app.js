// Accediendo aun arreglo

const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

console.table(meses);

console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);
console.table(meses[3]);

// Cuando mide el arreglo...
console.log("Longitud del arreglo:", meses.length );

for( let i = 0; i <=meses.length; i++ ){
    console.log( meses[ i-1 ] );
}