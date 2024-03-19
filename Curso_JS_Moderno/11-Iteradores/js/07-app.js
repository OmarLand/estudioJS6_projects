// Uso del for ...of
const tasksPending = ['Lavar', 'Estudiar', 'Programar', 'Encontrar Bugs', 'Hacer Almuerzo','Estudiar'];


const carrito = [
    { nombre : 'PS4', precio : 350 },
    { nombre : 'Teclado Gamer', precio : 50 },
    { nombre : 'Monitor 19inch', precio : 45 },
    { nombre : 'mouse', precio : 35 },
    { nombre : 'Lampara escritorio', precio : 15 },
    { nombre : 'Alexa Echo Show 8', precio : 50 },
]

for ( let pending of tasksPending ){
    console.log( pending );
}

for( let carro of carrito ){
    console.log( carro.nombre );
}