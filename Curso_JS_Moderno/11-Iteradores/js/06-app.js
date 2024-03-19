// Uso del .forEach y del .map

const tasksPending = ['Lavar', 'Estudiar', 'Programar', 'Encontrar Bugs', 'Hacer Almuerzo','Estudiar'];

tasksPending.forEach( pending => {
    console.log( pending );
} );


// El map crea un array con los elementos
const newArray = tasksPending.map( pending => pending );
console.log( newArray );
