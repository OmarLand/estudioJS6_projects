const suma = ( a, b ) =>  a + b;
const multiplicar = ( a, b ) => a * b;


const sumarMultiplicar = fn => fn(10, 20);

console.log( sumarMultiplicar(suma) );
console.log( sumarMultiplicar(multiplicar) );
