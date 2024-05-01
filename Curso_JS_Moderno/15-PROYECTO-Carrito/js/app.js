console.log("Hola tablet....");

// Variables
const carrito           = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn  = document.querySelector('#vaciar-carrito');
const listaCursos       = document.querySelector('#lista-cursos');

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
    console.log( curso );

    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id     : curso.querySelector('a').getAttribute('data-id'),
    }

    console.log( infoCurso );
}