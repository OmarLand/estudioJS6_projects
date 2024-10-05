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

    }
        // Asignamos datos del formulario a cliente: 
        cliente = { ...cliente, mesa, hora }
        
        // Ocultar Modal
        const modalFormulario = document.querySelector('#formulario');
        const modalBootStrap  = bootstrap.Modal.getInstance(modalFormulario);
        modalBootStrap.hide();

        // Mostrar las secciones:
        mostrarSecciones();
}

function mostrarSecciones(){
    const seccionesOcultas = document.querySelectorAll('.d-none');

    seccionesOcultas.forEach(seccion => seccion.classList.remove( 'd-none') )
}