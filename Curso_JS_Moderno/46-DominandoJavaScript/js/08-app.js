// Self

window.onload = () => {
    console.log('Ventana lista...');    
}

const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 30,
    disponible : true,
    mostrarInfo : function(){
        const self = this;
        return `El Producto: ${self.nombre} tiene un precio de ${self.precio}`
    }
}

console.log( producto.mostrarInfo() );

