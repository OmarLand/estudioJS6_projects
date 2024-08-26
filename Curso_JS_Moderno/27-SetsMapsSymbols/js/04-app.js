// Uso de las weakMaps

const producto = {
    idProducto : 50
}

const weakmap = new WeakMap();

weakmap.set(producto, 'Portatil');

console.log(weakmap.has(producto));
console.log(weakmap.get(producto));
// console.log(weakmap.size);
console.log(weakmap.delete(producto));

