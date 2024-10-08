let cliente = {
    mesa   : '',
    hora   : '',
    pedido : [],
};

const btnGuardarCliente = document.querySelector('#guardar-cliente');

btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente(){
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    // Resivamos si los campos estan vacios
    const camposVacios = [ mesa, hora ].some(campo => campo === '');

    if( camposVacios ){

        // Verificar si existe ya un alerta
        const existeAlerta = document.querySelector('.invalid-feedback');

        if(!existeAlerta){
            const alerta = document.createElement('div');
            alerta.classList.add('invalid-feedback', 'd-block','text-center');
            alerta.textContent = 'Todos los campos son obligatorio';
            document.querySelector('.modal-body form').appendChild(alerta);

            // Eliminamos alerta
            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }

        return;
'7'
    }
        // Asignamos datos del formulario a cliente: 
        cliente = { ...cliente, mesa, hora }
        
        // Ocultar Modal
        const modalFormulario = document.querySelector('#formulario');
        const modalBootStrap  = bootstrap.Modal.getInstance(modalFormulario);
        modalBootStrap.hide();

        // Mostrar las secciones:
        mostrarSecciones();

        // Obtener Platillos de la API Json-Server:
        obtenerPlatillos(); 
}

function mostrarSecciones(){
    const seccionesOcultas = document.querySelectorAll('.d-none');

    seccionesOcultas.forEach(seccion => seccion.classList.remove( 'd-none') )
}

function obtenerPlatillos(){
     const url = 'http://localhost:3000/platillos';
     fetch(url)
        .then(res => res.json())
        .then(res => mostrarPlatillos( res ) )
        .catch( error => console.log( '>>>', error ) )
}

function mostrarPlatillos( platillos ){
    // console.log( platillos );
    const contenido = document.querySelector('#platillos .contenido');

    platillos.forEach(platillo => {
        // console.log( platillo );
        const row = document.createElement('div');
        row.classList.add('row');

        const nombre = document.createElement('div');
        nombre.classList.add('col-md-4');
        nombre.textContent = platillo.nombre;

        row.appendChild(nombre);
        contenido.appendChild(row);
        
    })
    
}