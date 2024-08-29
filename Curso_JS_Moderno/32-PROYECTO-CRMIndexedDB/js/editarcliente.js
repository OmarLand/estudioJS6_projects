let DB;
const nombreInput = document.querySelector('#nombre');

(function(){


    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        // Verificar el ID  de la URL
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parametrosURL.get('id')
        if(idCliente){
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 1000);
        }
    });

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
        const { nombre } = datosCliente;

        nombreInput.value = nombre;
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