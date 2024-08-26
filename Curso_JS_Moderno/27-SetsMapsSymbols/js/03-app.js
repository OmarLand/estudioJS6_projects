// Uso de map(); Llave y valor

const cliente = new Map();

cliente.set('nombre','Omar');
cliente.set('tipo','vip');
cliente.set('saldo', 1500);

console.log( cliente );
console.log( cliente.size );
console.log( cliente.has('hola') );
console.log( cliente.get('nombre') );


cliente.delete('saldo');
cliente.clear();
console.log( cliente );

const paciente = new Map([ ['nombre', 'Paciente_Nombre'], ['Habitacion', 'No asignada_Hab'] ]);

paciente.set('Dr.', 'No Asignado');
paciente.set('nombre','Omar');

console.log( paciente );

paciente.forEach( usuario =>{
    console.log( usuario );
    
} );
