// Mediator Pattern

function Vendedor(nombre){
    this.nombre = nombre;
    this.sala   = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguientr artículo ${articulo}, iniciamos con precio de ${precio}`);        
    },
    vendido: comprador => {
        console.log( `Vendida a ${comprador}` );
        
    }
}

function Comprador(nombre){
    this.nombre = nombre;
    this.sala   = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`);   
    }
}

function Subasta(){
    let compradores = {};

    return {
        registrar : usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}


// Crear Objetos:
const omar = new Comprador('Omar');
const jesus = new Comprador('jesus');
const vendedor = new Vendedor('Vendedor de coches');
const subasta = new Subasta();

// Tienes que registrarlos
subasta.registrar(omar);
subasta.registrar(jesus);
subasta.registrar(vendedor);

vendedor.oferta('Peugeot 206', 350);

omar.oferta(450, omar);
jesus.oferta(700, jesus);
omar.oferta(650, omar);
jesus.oferta(800, jesus);

vendedor.vendido('Luis')