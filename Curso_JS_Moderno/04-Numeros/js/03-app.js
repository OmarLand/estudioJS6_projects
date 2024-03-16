let resultado;



// Accediendo a PI = 3.1415....
resultado = Math.PI;
console.log(( resultado ));

// Metodo de redondeo de valores Math.round(value);
resultado = Math.round(15.6); // Redondea a 16 directamente
resultado = Math.round(15.1); // Redondea a 15 directamente

console.log(( resultado ));

// Siempre va redondear hacia arriba usando el metodo ceil()
resultado = Math.ceil(2.5);
console.log(resultado);

// Siempre va redondear hacia abajo usando el metodo floor()
resultado = Math.floor(2.5);
console.log(resultado);

// Para calcular la Raiz cuadrada: Math.sqrt(value)
resultado = Math.sqrt(8)
console.log( resultado );

// Función absoluta: Para obtener el valor en positivo
resultado = Math.abs(-150)
console.log( resultado );

// Potencia: Math.pow(value, elevado al....)
resultado = Math.pow(2, 4);
console.log( resultado );

// Busca cual es el minimno de un grupo de numero:
resultado = Math.min(10,5,1,13,2);
console.log( resultado );

// Busca cual es el máximo de un grupo de numero:
resultado = Math.max(10,5,1,13,2);
console.log( resultado );

// Ponemos un numero random:
resultado = Math.random();
console.log( resultado );

// Aleatorio en un rango de números...
resultado = Math.floor( Math.random() * 30 );
console.log( resultado );