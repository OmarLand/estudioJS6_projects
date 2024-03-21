// 1. Metodo .some()...
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const arrayNum = [1,2,3,4,5,6,"text"];
const check = (arrayNum) => arrayNum % 10 === 0;
console.log("Uso de .some(): >>>", arrayNum.some( check ) );

// Ejemplo con forEach - lo que hace el some...
const arrayMonths = [ "Enero", "Febrero", "Marzo", "Abril" ];
arrayMonths.forEach((month) => {
    if( month === "Enero" ){
        console.log( `Usando .forEach este es el mes: ${month}` );
    }
})

// Mismo ejemplo usando el metodo .includes
const result = arrayMonths.includes("Febrero");
console.log(`Includes => ${result}`);

// Ahora evaluamos la sintaxis del metodo .some()
const result1 = arrayMonths.some( (month) => month === "Abril" );
console.log( `Usando .some: >> ${result1}` );

// Vamos a evaluar un array con objetos usando el .some()
const productos = [
    { nombre : "Portatil", medida : "15inch", precio : 450 },
    { nombre : "Monitor",  medida : "21inch", precio : 45 },
    { nombre : "Teclado",  medida : "15inch", precio : 450 }
];

const result2 = productos.some( (producto) => producto.nombre === "Monitor" );
console.log(`Checking Object: ${result2}`);