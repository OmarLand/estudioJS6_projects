window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado(){
    if( navigator.onLine ){
        console.log('Si estás conectado');
    } else {
        console.log('No estas conectado...');
        
    }

}