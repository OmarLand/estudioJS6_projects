// Añadiendo funciones a un objeto: Convertirlo para arrow Functions

const reproductor = {
    cancion       : ' ',
    reproducir    : ( id ) => console.log(`Reproduciendo canción con el id: ${id}...`),
    pausar        : () => console.log("Estoy pausando la canción..."),
    borrar        : () => console.log("Borrando la canción..."),
    crearPlaylist : ( nombre ) => console.log( `Creando la playlist: ${nombre}` ),
    reproducirPlaylist : ( nombre ) => console.log( `Reproduciendo playlist: ${nombre}` ),

    // Getters y Setters (Con set recibo el dato requerido) con Get Obtengo el dato y lo muestro...
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log( `Añadiendo ${cancion}` );
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Nothing else Matters'
reproductor.obtenerCancion;

reproductor.reproducir(45);
reproductor.reproducir(15);
reproductor.pausar();
reproductor.borrar();
reproductor.crearPlaylist("Heavy Metal")
reproductor.crearPlaylist("Nu metal")
reproductor.crearPlaylist("Free Cover")
reproductor.reproducirPlaylist('Heavy Metal')