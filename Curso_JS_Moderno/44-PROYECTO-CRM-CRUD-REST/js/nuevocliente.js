import { mostrarAlerta } from "./funciones.js";
import { nuevoCliente } from "./API.js";

(function(){

    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente( e ){
        e.preventDefault();

        const nombre   = document.querySelector('#nombre').value;
        const email    = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa  = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        // console.log( !Object.values(cliente).every( input => input !== '' ) );
        
        if( validar(cliente) ){
            // Mostramos mensaje
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        // console.log('Si pasó la validación...');
        nuevoCliente(cliente);
        
        // Validación de los campos del formulario que todos estén cubiertos
        function validar(obj){
            return !Object.values(cliente).every( input => input !== '' );
        }

    }

})();