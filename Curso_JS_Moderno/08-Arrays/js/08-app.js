// Destructuring
const producto = {
    nombre     : "Portatil ACER",
    precio     : 449.99,
    disponible : true,
}


// Aplicando destructuring en objetos
const { nombre, precio } = producto;
console.log( nombre, precio );



// Aplico el Destructuring en un Arrelo
const numeros = [ 15,25,35,45,55 ];
const [primero] = numeros;
console.log( primero );

// SI quiero llegar al 35:
const [numA, , numC] = numeros;
console.log("Tercera posición: ", numC);

const[ primera, ...ultimo ] = numeros;
console.log(">>>", numeros);