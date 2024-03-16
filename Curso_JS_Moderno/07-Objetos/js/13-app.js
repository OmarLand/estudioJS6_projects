// keys, values, entries
const producto = {

    nombre      : "Portatil ACER",
    precio      : 459.99,
    disponible  : true,

}

// Miramos si el objeto tiene o no información (las keys o elementos del obje)
console.log( Object.keys(producto) );

// Muestra el valor de las keys o elementos del objeto
console.log( Object.values(producto) );

// Entries retorna todo lo anterior dentro de unos arrays : Keys y valores como pares
console.log( Object.entries( producto ) );