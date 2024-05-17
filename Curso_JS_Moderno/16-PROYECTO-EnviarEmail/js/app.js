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

        if( e.target.value.trim() === '' ){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        } 

        if( e.target.id === 'email' && !validarEmail( e.target.value )) {
            mostrarAlerta('El Email no es valido', e.target.parentElement);
            return;
        }

        limpiarAlerta( e.target.parentElement );
    };

    function mostrarAlerta( mensaje,referencia ) {
        
        limpiarAlerta(referencia);

        // Generar alerta en HTML
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('bg-red-600','text-white','p-2','text-center')

        // Inyectamos el error al formulario...
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
        // Comprueba si existe un alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if( alerta ){
            alerta.remove();
        }
    }

    function validarEmail(){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;
    }

});