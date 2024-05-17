document.addEventListener('DOMContentLoaded', function(){

    // Seleccionar los elementos de la interfaz
    const inputEmail   = document.querySelector('#email');
    const inputAsunto  = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario   = document.querySelector('#formulario');

    // Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e){

        console.log(e.target.parentElement);

        if( e.target.value.trim() === '' ){
            // console.log('>>>', e.target.id);
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        } else {
            console.log('Contenedor del campo es: ', e.target.value);
        }
    };

    function mostrarAlerta( mensaje,referencia ) {
        // Generar alerta en HTML
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('bg-red-600','text-white','p-2','text-center')

        // Inyectamos el error al formulario...
        referencia.appendChild(error);
    }

});