const resultado  = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');

const registrosPorPagina = 30;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () =>{
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e){
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if( terminoBusqueda === '' ){
        mostrarAlerta('Agrega algo en la busqueda...');
    }

    // Buscar imagen en la API
    buscarImagenes();

}

function mostrarAlerta( mensaje ){

    const existeAlerta = document.querySelector('.bg-red-100');

    if(!existeAlerta){
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100','border-red-400','text-red-700','px-4', 'py-3','rounded','max-w-lg','mx-auto','mt-6','text-center');
        alerta.innerHTML = `
            <strong class=""font-bold>Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;
    
        formulario.append(alerta)
    
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    
    }
}

function buscarImagenes(){

    const termino = document.querySelector('#termino').value;

    const key = `13099941-196090c13d211ef02671a6e4e`;
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;

    // console.log( url );

    fetch( url )
        .then( res => res.json() )
        .then( res => {
            totalPaginas = calcularPaginas(res.totalHits);
            // console.log( totalPaginas );
            mostrarImagenes( res.hits );
        } )
}

// Generador que va buscar la cantidad de elementos según las paginas
function *crearPaginador(total){
    for( let i = 1; i <= total ; i++ ){
        // console.log( i );
        yield i;
    }
}

function calcularPaginas(total){
    return parseInt( Math.ceil( total / registrosPorPagina ) )
}

function mostrarImagenes( imagenes ){
    // console.log( imagenes );

    while( resultado.firstChild ){
        resultado.removeChild(resultado.firstChild);
    }

    // Iterar sobre el arreglo de imagenes y construir el HTML
    imagenes.forEach(imagen => {
    
        const { previewURL, likes, views, largeImageURL, } = imagen;
        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${previewURL}">

                    <div class="p-4">
                        <p class="font-bold">${likes} <span class="font-light">Me Gusta</span> </p>
                        <p class="font-bold">${views} <span class="font-light">Veces vista</span> </p>

                        <a class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                         href="${largeImageURL}" target="_black" rel="noopener noreferrer">
                            Ver Imagen
                        </a>
                    </div>
                </div>
            </div>
        `
    });

    // Limpiamos el paginador previo
    while( paginacionDiv.firstChild ){
        paginacionDiv.removeChild(paginacionDiv.firstChild);

    }

    // Generamos el HTML
    imprimirIterador();
       
}

function imprimirIterador(){
    iterador = crearPaginador(totalPaginas);
    //console.log( iterador.next().done );

    while( true ){
        const {value, done} = iterador.next();
        if(done) return;

        // Caso contrario, genera un botón por cada elemento
        const boton = document.createElement('a');
        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold','mb-4','rounded');

        boton.onclick = function(){
            paginaActual = value;

            console.log(paginaActual);

            buscarImagenes();
            
        }

        paginacionDiv.appendChild(boton)

    }
    
}