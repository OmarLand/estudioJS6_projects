// Uso del for ...in
// Ëste muestra los indices de los valores del arreglo usamos por ver los indices de un objeto

const tasksPending = ['Lavar', 'Estudiar', 'Programar', 'Encontrar Bugs', 'Hacer Almuerzo','Estudiar'];


for( task in tasksPending ){
    console.log( task );
}