// Destructuring, accediendo a un elemento de un objeto anidado

const producto = {
    nombre     : "Portatil ACER",
    precio     : 459.99,
    disponible : true,
    zcaracteristicas : {
        ramMemory   : '16 Gb',
        ssd         : '512gb',
        processor   : 'Intel Core i5 XXXXX',
        fast        : true,
        monitorInch : 15,
        fabricador  : {
            pais : 'TAIWAN',
            cp   : 15555, 
        }
    }
}

const { nombre, precio, zcaracteristicas, zcaracteristicas:{fabricador: {pais} } } = producto;

console.log( nombre );
console.log( precio );
console.log( zcaracteristicas );
console.log( pais );