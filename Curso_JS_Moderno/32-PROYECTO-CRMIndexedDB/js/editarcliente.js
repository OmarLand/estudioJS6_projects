(function(){
    let DB;
    let idCliente;
    
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        // Actualizar el registro:
        formulario.addEventListener('submit', actualizarCliente)

        // Verificar el ID  de la URL
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parametrosURL.get('id')
        if(idCliente){
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 1000);
        }
    });

    function actualizarCliente(e){
        e.preventDefault();

        if(nombreInput.value === '' || emailInput.value === '' || empresaInput.value === '' || telefonoInput.value === ''){
            imprimirAlerta('Todos los campos son obligatorios','error');
            return;
        }
    }

    // Actualizar cliente
    const clienteActualizado = {
        nombre   : nombreInput.value,
        email    : emailInput.value,
        telefono : telefonoInput.value,
        empresa  : empresaInput.value,
        id       : Number(idCliente)
    }

    const transaction = DB.transaction(['crm'],'readwrite');
    const objectStore = transaction.objectStore('crm');

    objectStore.put(clienteActualizado);

    transaction.oncomplete = function(){
        imprimirAlerta('Cliente actualizado exitosamente');

        setTimeout(() => {
            window.location.href ='index.html';
        }, 2000);

    }

    transaction.onerror = function(){
        imprimirAlerta('Woops! No pude actualizar el cliente... :( ','error');
        
    }

    function obtenerCliente(id){
        //console.log(id);
        const transaction = DB.transaction(['crm'],'readwrite');
        const objectStore = transaction.objectStore('crm');

        const cliente = objectStore.openCursor();
        cliente.onsuccess = function(e){
            const cursor = e.target.result;
            if(cursor){
                if(cursor.value.id === Number(id)) {
                    //console.log(cursor.value);
                    llenarFormulario(cursor.value);
                }
                cursor.continue();
                
            }
        }
    }

    function llenarFormulario(datosCliente){
        const { nombre, email, telefono, empresa } = datosCliente;

        nombreInput.value   = nombre;
        empresaInput.value  = empresa;
        emailInput.value    = email;
        telefonoInput.value = telefono;
    }   

    function conectarDB(){
        const abrirConexion = window.indexedDB.open('crm',2);

        abrirConexion.onerror = function(){
            console.log('Hubo un error - conectar Editar Cliente -');
        }

        abrirConexion.onsuccess = function(){
            DB = abrirConexion.result;
        }
    }
})();