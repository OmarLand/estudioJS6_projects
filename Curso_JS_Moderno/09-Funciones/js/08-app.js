// Comunicación entre funciones con multiples funciones que se pasan valores

function sumar( a, b){
    return a + b;
}

const resultado = sumar( 15, 45 );
console.log( resultado );


// Ejemplo más avanzado:

let total = 0;

function agregarCarrito( precio ){
    return total += precio;
}

function calcularImpuesto( total ){
    return total * 1.21;
}

agregarCarrito(300);
agregarCarrito(200);
agregarCarrito(100);

const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es de: ${totalPagar}`);

console.log( ">>> ",total );