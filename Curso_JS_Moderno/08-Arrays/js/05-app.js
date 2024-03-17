// Añadiendo un elemento al arreglo al inicio o al fin:
// const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio"];

// console.table(meses);

//Añadiendo un valor en el arreglo:
// meses.push("Julio")
// meses.push("Agosto")
// console.table( meses );

const carrito = [];

// Definimos un producto
const producto = {
    nombre : "Portatil acer 15 inches",
    precio : 450,
}

const producto1 = {
    nombre : "Mouse Xiaomi",
    precio : 15,
}

const producto3 = {
    nombre : "Smartphone Xiaomi pro 1000",
    precio : 499.99,
}



carrito.push( producto );
carrito.push( producto1 ); // Usando el push lo metemos al final del arreglo
carrito.unshift( producto1 ); // Lo metemos al comienzo del arreglo

console.table( carrito );