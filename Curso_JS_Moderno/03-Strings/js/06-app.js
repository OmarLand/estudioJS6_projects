// Repeat

const producto = 'Portatil de 19 pulgadas';

const texto = ' en promoción'.repeat(2.4); // Solo repetimos el string ' en promoción'

console.log(texto);
console.log(`${producto} ${texto} `);

// Split, dividir un string

const actividad = "Repasando los conceptos de Javascript Moderno";
console.log( actividad.split(" ") );

const hobbies = 'Deporte, leer, jugar, programar, estudiar, caminar, ejercicio';
console.log( hobbies.split(",") );

const tweet = "Repasando los conceptos de #EcmaScript6";
console.log( tweet.split("#") );