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

const producto2 = {
    nombre : "Porta Monitor Gaming 3000",
    precio : 849.99,
}

const producto3 = {
    nombre : "Smartphone Xiaomi pro 1000",
    precio : 499.99,
}



carrito.push( producto );
carrito.push( producto1 ); // Usando el push lo metemos al final del arreglo
carrito.push( producto2 ); // Usando el push lo metemos al final del arreglo
carrito.unshift( producto1 ); // Lo metemos al comienzo del arreglo

console.table( carrito );
// console.table( carrito );

// Eliminando el ultimo valor de un arreglo
//carrito.pop();
// console.table( carrito );

// carrito.pop();
// console.table( carrito );

// Eliminar elemento del inicio de un array usamos el SHIFT
// carrito.shift();
// console.table( carrito );

// Eliminando un elemento intermedio del array usamos el SPLICE(A,B);
carrito.splice(1)
console.table( carrito );
