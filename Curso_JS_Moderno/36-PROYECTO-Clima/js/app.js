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
        }, 5000);
    
    }

}


function consultarAPI(ciudad, pais){

    const appID = '69d2dcebb1466799a426374d2bce1e7e';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

    // console.log(url);

    spinner();

    fetch(url)
        .then(res => res.json())
        .then( datos => {

            limpiarHTML(); // Limpiamos el HTML previo
            
            if( datos.cod === "404" ){
                mostrarError('Ciudad no encontrada');
                return
            }

            // Imprime la respuesta en el HTML
            mostrarClima(datos);
        })
}

function mostrarClima(datos){
    
    const {name, main: {temp, temp_max, temp_min} } = datos;

    const centigrados = kelvinACentrigrados(temp);
    const max = kelvinACentrigrados(temp_max);
    const min = kelvinACentrigrados(temp_min);

    const nombreCiudad = document.createElement('div');
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold','text-2xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451;`;
    actual.classList.add('font-bold','text-6xl');

    const tempMaxima = document.createElement('div');
    tempMaxima.innerHTML = `Max: ${max} &#8451;`
    tempMaxima.classList.add('text-xl');

    const tempMinima = document.createElement('div');
    tempMinima.innerHTML = `Min: ${min} &#8451;`
    tempMinima.classList.add('text-xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center','text-white');
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);

    resultado.appendChild( resultadoDiv );

}

function kelvinACentrigrados(grados){
    return parseInt(grados - 273.15)
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function spinner(){
    
    limpiarHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
    `;

    resultado.appendChild(divSpinner);
}