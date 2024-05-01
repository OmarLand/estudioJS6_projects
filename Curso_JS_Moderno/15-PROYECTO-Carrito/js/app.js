//console.log("Hola tablet....");
// Variables
const carrito           = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn  = document.querySelector('#vaciar-carrito');
const listaCursos       = document.querySelector('#lista-cursos');
let articulosCarrito    = [];

cargarEventListeners();
function cargarEventListeners(){
    // Cuando agregamos un curso presionando botón "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso );
    
}

// Funciones
function agregarCurso( e ){
    e.preventDefault();    
    
    if( e.target.classList.contains('agregar-carrito') ){
        //console.log('Agregando articulo al carrito...');
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso( cursoSeleccionado );
    }
    // console.log( e.target.classList );
}

function leerDatosCurso( curso ){
    //console.log( curso );

    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id     : curso.querySelector('a').getAttribute('data-id'),
    }

    //console.log( infoCurso );

    // Añadiendo los elementos al carrito de compras
    articulosCarrito = [ ... articulosCarrito, infoCurso ];
    console.log( articulosCarrito );
    carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML() {

    // Limpiar el HTML
    limpiarHTML();

    // Recorremos el carrito y generamos el HTML allí
    articulosCarrito.forEach( curso =>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${curso.titulo}
            </td>
        `;

        // Agregar HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

}

// Elimina los cursos del tbody
function limpiarHTML(){
    // Forma lenta
    // contenedorCarrito.innerHTML = '';

    while ( contenedorCarrito.firstChild ) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}