// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweet = [];


// Event Listeners
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}




// Funciones
function agregarTweet( e ) {
    e.preventDefault();

    // TextArea del Tweet
    const tweet = document.querySelector('#tweet').value;

    console.log(tweet);

    // Validación
    if( tweet ==='' ){
        mostrarError('Escribe algo para mostrar');
        return;
    }

    console.log('Posting tweet');

}

// Mostrando mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p')
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild( mensajeError )

    // Eliminamos la alerta luego de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}