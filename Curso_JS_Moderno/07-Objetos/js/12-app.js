// Uso del Object constructor

// Object literal
const producto = {

    nombre      : "Portatil ACER",
    precio      : 459.99,
    disponible  : true,

}


// Object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}


// Creamos el objeto:
producto2 = new Producto("Funko", 45);
producto3 = new Producto("Mouse Gamer", 15.90);

console.log( producto2 );
console.log( producto3 );