const criptoMonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda       : '',
    criptomoneda : '',
}

// Creamos un Promise
const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
    resolve(criptomonedas);
});

document.addEventListener('DOMContentLoaded', () =>{
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario );

    criptoMonedasSelect.addEventListener('change', leerValor )
    monedaSelect.addEventListener('change', leerValor )
});

function consultarCriptomonedas(){ 
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`

    fetch(url)
        .then(res => res.json() )
        .then(res => obtenerCriptomonedas( res.Data ) )
        .then(criptomonedas => selectCriptomonedas( criptomonedas ) )
}

function selectCriptomonedas( criptomonedas ){
    criptomonedas.forEach( cripto => {
        const { FullName, Name } = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptoMonedasSelect.appendChild(option);
        
    });
}

function leerValor(e){
    objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e){
    e.preventDefault();

    // Validar
    const { moneda, criptomoneda } = objBusqueda;

    if( moneda === '' || criptomoneda === '' ){
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    // Consultar API con los resultados
    consultarAPI();

}

function mostrarAlerta( msg ) {

    const existeError = document.querySelector('.error')

    if( !existeError ){

        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
    
        // Mensaje de error
        divMensaje.textContent = msg
    
        formulario.appendChild(divMensaje);
    
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }    
}

function consultarAPI(){
    const {moneda, criptomoneda} = objBusqueda;
    // console.log('>>>', objBusqueda );
    
    // const url = `https://min-api.cryptocompare.com/data/price?fsym=${criptomoneda}&tsyms=${moneda}`;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    //Mostrar SPINNER
    mostrarSpinner();


    fetch(url)
        .then( res => res.json() )
        .then( cotizacion => {
            mostrarCotizacionHTML( cotizacion.DISPLAY[criptomoneda][moneda] );
        })
}

function mostrarCotizacionHTML(cotizacion){

    //console.log('>>', cotizacion );
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR,LASTUPDATE } = cotizacion;

    limpiarHTML();

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `<p>Precio más alto del día: <span>${HIGHDAY}</span></p>`

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `<p>Precio más bajo del día: <span>${LOWDAY}</span></p>`
    
    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `<p>Precio últimas 24 hrs: <span>${CHANGEPCT24HOUR}%</span></p>`
    
    const ultimoCambio = document.createElement('p');
    ultimoCambio.innerHTML = `<p>Ultima actualización: <span>${LASTUPDATE}</span></p>`

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimoCambio);
    
}

function limpiarHTML(){
    while( resultado.firstChild ){
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner(){
    limpiarHTML();

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;

    resultado.appendChild(spinner)
}