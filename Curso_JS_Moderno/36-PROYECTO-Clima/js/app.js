const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () =>{
    formulario.addEventListener('submit', buscarClima)
})

function buscarClima(e){
    e.preventDefault();

    // Validar campos
    const ciudad = document.querySelector('#ciudad').value;
    const pais   = document.querySelector('#pais').value;
    
    // console.log('Ciudad: ', ciudad);
    // console.log('Pais: ', pais);
    
    if( ciudad === '' || pais === '' ){
        // Hubo error
        mostrarError('Ambos campos son obligatorios');
        return;
    }

    // Consultariamos la API
    consultarAPI(ciudad, pais);
}

function mostrarError( mensaje ){
    const alerta = document.querySelector('.bg-red-100');

    if(!alerta){
        
        // Crear mensaje de alerta // Scripting
        const alerta  = document.createElement('div');
        alerta.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded','max-w-md', 'mx-auto','mt-6', 'text-center');
    
        alerta.innerHTML=`
        <strong class="font-bold">Error!</strong> 
        <span class="block">${mensaje}</span>
        `;
        
        container.appendChild(alerta);

        setTimeout(() => {
            alerta.remove()
        }, 3000);
    
    }

}


function consultarAPI(ciudad, pais){

    const appID = '69d2dcebb1466799a426374d2bce1e7e';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then( datos => console.log( '>', datos ) )
    
}