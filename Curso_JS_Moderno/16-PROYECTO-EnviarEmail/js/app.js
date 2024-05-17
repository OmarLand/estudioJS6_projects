document.addEventListener('DOMContentLoaded', function(){
    
    const email = {
        email   : '',
        asunto  : '',
        mensaje : ''
    }

    //console.log(email);

    // Seleccionar los elementos de la interfaz
    const inputEmail   = document.querySelector('#email');
    const inputAsunto  = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario   = document.querySelector('#formulario');
    const btnSubmit    = document.querySelector('#formulario button[type="submit"]');
    const btnReset     = document.querySelector('#formulario button[type="reset"]');
    const spinner      = document.querySelector('#spinner');

    // Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e){
        e.preventDefault();
        //Reiniciamos el objeto
        email.email     = '';
        asunto.asunto   = '';
        mensaje.mensaje = '';

        formulario.reset();
        comprobarEmail();
    });

    function enviarEmail(e){
        e.preventDefault();

        // console.log("Dentro de Enviar Email,..");

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');
    }

    function validar(e){

        if( e.target.value.trim() === '' ){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        } 

        if( e.target.id === 'email' && !validarEmail( e.target.value )) {
            mostrarAlerta('El Email no es valido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta( e.target.parentElement );

        // Asignar valores por defecto:
        email[e.target.name] = e.target.value.trim().toLowerCase();
        
        //Comprobar el objeto de email
        comprobarEmail();

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

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail(){
        if( Object.values(email).includes('') ) {
            btnSubmit.classList.add('opacity-50')
            btnSubmit.disabled = true;
            return;
        }
        
        btnSubmit.classList.remove('opacity-50')
        btnSubmit.disabled = false;

    }


});