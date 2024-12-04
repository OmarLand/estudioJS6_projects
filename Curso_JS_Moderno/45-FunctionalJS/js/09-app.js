const suma = (a, b, c) => a + b + c;
const parcial = (a) => (b,c) => suma (a,b,c)

const primerNumero = parcial(5);
const resultado = primerNumero(6,7)

console.log( suma(4,5,6) );
console.log( resultado);

