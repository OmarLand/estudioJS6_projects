// Probar 2 valores;

function suma( a, b ){
    return a + b;
}

function resta( a, b ){
    return a - b;
}

let resultado = suma(1,2);
let esperado  = 3;

if( resultado !== esperado ){
    console.error(`El resultado ${resultado} es diferente a lo esperado; No pasa la prueba`);
    
} else {
    console.log('La prueba pasó correctamente');
    
}

resultado = resta(10, 5);
esperado = 5;

if( resultado !== esperado ){
    console.error(`El resultado ${resultado} es diferente a lo esperado; No pasa la prueba`);
    
} else {
    console.log('La prueba pasó correctamente');
    
}