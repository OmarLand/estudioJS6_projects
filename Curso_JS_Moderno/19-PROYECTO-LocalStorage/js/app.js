// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
    // Para que el usuario agregue nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets')) || [];
        console.log( tweets );

        crearHTML();
    })
};


// Funciones
function agregarTweet( e ) {
    e.preventDefault();

    // TextArea del Tweet
    const tweet = document.querySelector('#tweet').value;

    console.log(tweet);

    // Validación
    if( tweet === '' ){
        mostrarError('Escribe algo para mostrar');
        return; // Evitamos que se ejecuten más lineas de código
    }

    const tweetObj = {
        id   : Date.now(),
        tweet : tweet,
    };

    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    console.log( tweets ); // Compruebo tweets si se esta agregando al array
    
    // Una vez agregado vamos a crear el HTML
    crearHTML();

    // Reiniciar el textArea Formulario
    formulario.reset();

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

// Muestra un listado de los tweets
function crearHTML(){
    
    limpiarHTML();

    if( tweets.length > 0 ){
        tweets.forEach( tweet => {

            // Agregar un botón para eliminar un Tweet
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';      
            
            // Añadir la funcion para eliminar un tweet
            btnEliminar.onclick = () =>{
                borrarTweet( tweet.id );
            }

            //Crear el HTML
            const li = document.createElement('li');

            // Añadir el texto
            li.innerText = tweet.tweet;

            // Asignar el botón
            li.appendChild(btnEliminar)

            // Insertarlo en el HTML
            listaTweets.appendChild(li);
        });
    };

    sincronizarStorage();
};

// Agregando los Tweets actuales al localStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify( tweets ) );
}

// Borrar tweet
function borrarTweet( id ){
    tweets = tweets.filter( tweet => tweet.id !== id )

    crearHTML();
}

// Limpiar el HTML
function limpiarHTML() {
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}