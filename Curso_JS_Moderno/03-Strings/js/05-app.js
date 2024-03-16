const texto = 'Los tres tristes tigres comieron trigo en un trigal'

console.log(`Texto original es: ${texto}`);

// Remplazar
console.log( "Texto cambiado >>> ", texto.replace("tigres", "Leones") );

//Cortar
console.log( "Cortamos texto: ", texto.slice(0,16) ); // Empieza en la posición 0 y termine en la posición 16
console.log( "Cortamos texto: ", texto.slice(8).trim() ); // Empieza en la posición 8


//Alternativa a Slice Substring:
console.log( texto.substring(0,23) );
console.log( texto.substring(1,5) );

// Corta la primera letra:
console.log( texto.charAt(0) ); //Solo muestro ese caracter en esa posición