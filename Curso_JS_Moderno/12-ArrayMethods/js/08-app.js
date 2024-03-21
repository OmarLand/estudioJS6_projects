// Uso del spread Operator
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio"];

const productos = [
    { nombre: "Altavoces",   marca: "BOSE",     precio: 85 },
    { nombre: "Teclado",     marca: "logitech", precio: 25 },
    { nombre: "Mouse",       marca: "Logitech", precio: 15 },
    { nombre: "Monitor 19i", marca: "BENQ",     precio: 125 },
];

const meses1 = [...meses, "Julio"]
console.log( `Spread: ${meses1}` );

// Spread Operator con arreglo de índices:
const newProduct = { nombre : "Xiaomi Redmi Note 10pro", precio : 350 };

const productos2 = [newProduct, ...productos]
console.log( productos2 );