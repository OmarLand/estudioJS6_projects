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

    // Elimina cursos del carrito de compra
    carrito.addEventListener( 'click', eliminarCurso );

    // Muestra los cursos del LocalStorage
    document.addEventListener('DOMContentLoaded', () =>{
        articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || [];
    });

    // Vaciar el carrito de compra
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //reseteamos el arreglo...
        
        limpiarHTML();

    });
}

// Funciones
function agregarCurso( e ){
    e.preventDefault();    
    
    if( e.target.classList.contains('agregar-carrito') ){
        //console.log('Agregando articulo al carrito...');
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso( cursoSeleccionado );
    }
}

// Elimina un curso del carrito
function eliminarCurso(e) {
    // console.log( e.target.classList );
    if( e.target.classList.contains('borrar-curso') ){
        const cursoId = e.target.getAttribute('data-id');

        // Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId );
        
        carritoHTML(); // Iterar sobre el carrito de compra y actualiza datos
    }
}

function leerDatosCurso( curso ){
    //console.log( curso );

    const infoCurso = {
        imagen   : curso.querySelector('img').src,
        titulo   : curso.querySelector('h4').textContent,
        precio   : curso.querySelector('.precio span').textContent,
        id       : curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1,
    }

    // Comprobamos si un elemento exista ya en el Carrito de compras:
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    console.log( existe );
    if (existe) {
        //Actualizamos cantidad del producto
        const cursos = articulosCarrito.map( curso => {
            if( curso.id === infoCurso.id ){
                curso.cantidad++;
                return curso; // retornamos el objeto actualizado
            } else{
                return curso; // retornamos los objetos que no están duplicados
            }
        })
        articulosCarrito = [...cursos];
    } else {
        // agregamos el curso al carrito
       articulosCarrito = [ ... articulosCarrito, infoCurso ];
    }



    console.log( articulosCarrito );
    carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML() {

    // Limpiar el HTML
    limpiarHTML();

    // Recorremos el carrito y generamos el HTML allí
    articulosCarrito.forEach( curso =>{
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${ imagen }" width="100">
            </td>
            <td>
                ${ titulo }
            </td>
            <td>
                ${ precio }
            </td>
            <td>
                ${ cantidad }
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${ id }"> X </a>
            </td>
        `;

        // Agregar HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

    // Agregar el carrito de compras al Storage
    sincronizarStorage();

}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// Elimina los cursos del tbody
function limpiarHTML(){
    // Forma lenta
    // contenedorCarrito.innerHTML = '';

    while ( contenedorCarrito.firstChild ) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}