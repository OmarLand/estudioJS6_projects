// Uso de funciones en Objetos y acceder a sus valores:

// const nombre = "Omar";
// const precio = 10;
// const disponible = true;

const producto = {
    nombre      : "Portatil ACER",
    precio      : 459.99,
    disponible  : true,
    mostrarInfo : function () {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio} y su disponibilidad es ${this.disponible}`);
    }
}
const producto2 = {
    nombre      : "Alexa Echo Show 2",
    precio      : 75.99,
    disponible  : true,
    mostrarInfo : function () {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio} y su disponibilidad es ${this.disponible}`);
    }
}


producto.mostrarInfo();
producto2.mostrarInfo();