const carrito = [
    {nombre : 'Monitor 1', precio : 250},
    {nombre : 'Monitor 2', precio : 100},
    {nombre : 'Monitor 3', precio : 300},
    {nombre : 'Monitor 4', precio : 450},
    {nombre : 'Monitor 5', precio : 50},
    {nombre : 'Monitor 6', precio : 850},
    {nombre : 'Monitor 7', precio : 550},
    {nombre : 'Monitor 8', precio : 175}
];

const resultado = carrito.filter(producto => {
    return producto.precio > 400;
})

//console.log( resultado );

const mayor400 = producto => {
    return producto.precio > 400;
}

const resultado1 = carrito.filter(mayor400);
console.log( resultado1 );
