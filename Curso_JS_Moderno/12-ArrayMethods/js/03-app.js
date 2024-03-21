// Uso del método .reduce()
const newArray = [10, 20, 30, 40, 50];
let i = 0;

const suma = newArray.reduce((acc, curr) => acc + curr, i);
console.log("La suma de los elementos del array es: >>>",suma);

// Ejemplo 2 .reduce()
const productos2 = [
  { nombre: "Altavoces", marca: "BOSE", precio: 85 },
  { nombre: "Teclado", marca: "logitech", precio: 25 },
  { nombre: "Mouse", marca: "Logitech", precio: 15 },
  { nombre: "Monitor 19i", marca: "BENQ", precio: 125 },
];

let total = productos2.reduce((acc, curr) => acc + curr.precio, 0);
console.log("Total del carrito:", total);