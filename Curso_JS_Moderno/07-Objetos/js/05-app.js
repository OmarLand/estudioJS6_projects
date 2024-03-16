// Objetos anidados
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

console.log( producto.zcaracteristicas.fabricador.pais );