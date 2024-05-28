const nombre = localStorage.getItem('nombre')

console.log(nombre);

const productoJSON = localStorage.getItem('producto');
console.log( JSON.parse(productoJSON) );

const meses = localStorage.getItem('meses');
console.log( JSON.parse(meses) );