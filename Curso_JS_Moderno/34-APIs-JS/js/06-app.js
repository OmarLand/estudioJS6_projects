const salida    = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI(){
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onStart = function(){
        salida.classList.add('mostrar');
        salida.textContent ='Escuchando...';
    };

    recognition.onspeechend = function(){
        salida.textContent = 'Se dejó de grabar...';
        recognition.stop()
    }

    recognition.onresult = function(e){
        console.log(e.result[0][0]);   

        const {confidence, transcript} = e.result[0][0];

        const speech = document.createElement(`p`);
        speech.innerHTML = `Capturado: ${transcript}`;

        const seguridad = document.createElement('p');
        seguridad.innerHTML = `Seguridad ${ parseInt( confidence*100 ) }%`

        salida.append(speech);
    }
}
