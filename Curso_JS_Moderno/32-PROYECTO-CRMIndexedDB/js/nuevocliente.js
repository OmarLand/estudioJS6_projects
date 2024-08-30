let DB;
(function(){
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {

        conectarDB();

        formulario.addEventListener('submit', validarCliente);
    })



    function validarCliente(e){
        e.preventDefault();

        // Leer todos los inputs
        const nombre   = document.querySelector('#nombre').value;
        const email    = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa  = document.querySelector('#empresa').value;

        if( nombre ==='' || email ===''|| telefono === '' || empresa === '' ){
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        // Creamos un objeto con la informacion
        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
        }

        cliente.id = Date.now();

        console.log('=>',cliente);
        

        crearNuevoCliente(cliente);
        
    }

    function crearNuevoCliente(cliente){
        const transaction = DB.transaction(['crm'], 'readwrite');

        const objectStore = transaction.objectStore('crm');

        objectStore.add(cliente);
        
        transaction.onerror = function(){
            console.log('Error al agregar usuario');
            setTimeout(() => {
                imprimirAlerta('Hubo un error...','error');
            }, 3000);
        };

        transaction.oncomplete = function() {
            console.log('Cliente agregado...');
            imprimirAlerta('Cliente se agregó exitosamente')
            setTimeout(() => {
                window.location.href = 'index.html'
            }, 3000);
        }
    }


})();