// Uniendo los objetos

const producto = {
    nombre     : "Portatil ACER",
    precio     : 459.99,
    disponible : true,

}

const tiendas = {
    storeName    : 'MediaMarkt',
    storeAddress : 'That Avenue blablabla Nº 4023'
}

console.log( producto );
console.log( tiendas );

// Funcuón Object.assign(obj1, obj2)
const resultado = Object.assign(producto, tiendas)
console.log( resultado );

// Función Spread
const resultado2 = { ...producto, ...tiendas };
console.log( resultado2 );