// Añadiendo funciones a un objeto:

const reproductor = {
    reproducir : ( id ) => {
        console.log(`Reproduciendo canción con el id: ${id}...`);
    },
    pausar : () => {
        console.log("Estoy pausando la canción...");
    },
    borrar : () => {
        console.log("Borrando la canción...");
    },
    crearPlaylist : ( nombre ) => {
        console.log( `Creando la playlist: ${nombre}` );
    },
    reproducirPlaylist : ( nombre ) => {
        console.log( `Reproduciendo playlist: ${nombre}` );
    }
    
}

reproductor.reproducir(45);
reproductor.reproducir(15);
reproductor.pausar();
reproductor.borrar();
reproductor.crearPlaylist("Heavy Metal")
reproductor.crearPlaylist("Nu metal")
reproductor.crearPlaylist("Free Cover")
reproductor.reproducirPlaylist('Heavy Metal')