// WeakSet

const weakset = new WeakSet();

const cliente = {
    nombre : 'Omar',
    saldo  : 150
}

weakset.add(cliente)

console.log( weakset.has(cliente) );
console.log( cliente.size );

console.log( weakset );
