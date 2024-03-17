// Añadiendo un elemento al arreglo al inicio o al fin:
const carrito = [];

// Definimos un producto
const producto = {
    nombre : "Portatil acer 15 inches",
    precio : 450.99,
}

const producto1 = {
    nombre : "Mouse Xiaomi",
    precio : 15.99,
}

const producto3 = {
    nombre : "Smartphone Xiaomi pro 1000",
    precio : 499.99,
}

// Añadimos un elemento de forma declarativa...
let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto1];
resultado = [producto3, ...resultado];


if( resultado < 1 ){
    console.log("El Carrito está vacío");
} else {
    console.table( resultado );
}
