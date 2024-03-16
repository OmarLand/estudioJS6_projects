// Gestionando el objeto: Añadiendo o eliminando propiedades

const producto = {
    nombre     : "Portatil ACER",
    precio     : 459.99,
    disponible : true,
    imagen     : 'url/imagen.jpg'
}
console.log( producto );

// Añado una propiedad al objeto
producto.codigo='ABC1234'
console.log( producto );

// Elimino la propiedad de un objeto
delete producto.disponible;
console.log(producto);