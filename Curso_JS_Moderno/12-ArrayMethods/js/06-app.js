// Uso del método .every()

const productos4 = [
    { nombre: "Altavoces", marca: "BOSE", precio: 85 },
    { nombre: "Teclado", marca: "logitech", precio: 25 },
    { nombre: "Mouse", marca: "Logitech", precio: 15 },
    { nombre: "Monitor 19i", marca: "BENQ", precio: 125 },
];

// Usando el metodo every, la condicion deben de cumplirla todos los valores
const result = productos4.every( producto => producto.precio < 25 );
console.log( result );

// USando el metodo .some, debe cumplirse al menos en un valor
const result1 = productos4.some( productos => productos.precio < 25 );
console.log( result1 );

