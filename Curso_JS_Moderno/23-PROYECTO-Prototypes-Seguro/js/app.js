
// Constructores
function Seguro(marca, year, tipo){
    this.marca = marca,
    this.year = year,
    this.tipo = tipo
}

function UI(){

}


// Llena las opciones de los años
UI.prototype.llenarOpciones = () =>{
    const max = new Date().getFullYear(),
          min = max - 20;

    const selectYear = document.querySelector('#year');

    for( let i = max; i >= min; i-- ){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// instanciar UI
const ui = new UI();
console.log(ui);

document.addEventListener('DOMContentLoaded', () =>{
    ui.llenarOpciones();  // Llenamos el select con los años
})

eventListeners();
function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro)
}

function cotizarSeguro(e){
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;
    //console.log('>>>', marca);


    // Leer el año seleccionado
    const anio = document.querySelector('#year').value;
    //console.log( 'Año: ', anio );

    // Leer la cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    console.log('Tipo:', tipo );

    if( marca === '' || anio === '' || tipo === '' ){
        console.log('No pasó la validación');
    } else {
        console.log('Sí pasó la validación....');
    }

    console.log('Cotizando...');

}
