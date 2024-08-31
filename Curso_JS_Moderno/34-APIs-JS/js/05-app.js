document.addEventListener('visibilitychange', () => {
    // console.log(document.visibilityState);
    
    if( document.visibilityState === 'visible' ){
        console.log('Ejecutamos la funcion para reproducir lo que sea...');
    } else {
        console.log('Pausamos la reproducción...');
        
    }
});