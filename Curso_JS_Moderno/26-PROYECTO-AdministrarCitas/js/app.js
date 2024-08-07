// Selectores
const pacienteInput    = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput       = document.querySelector('#email');
const fechaInput       = document.querySelector('#fecha');
const sintomasInput    = document.querySelector('#sintomas');

const formulario      = document.querySelector('#formulario-cita');

// Eventos
pacienteInput.addEventListener('change', datosCita)
propietarioInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change', datosCita);
formulario.addEventListener('submit', submitCita)

//Objeto de Cita
const citaObj = {
    paciente    : '',
    propietario : '',
    email       : '',
    fecha       : '',
    sintomas    : '',
}

function datosCita (e){
    // console.log(e.target.value);
    citaObj[e.target.name] = e.target.value
    console.log( citaObj );
};

function submitCita(e){
    e.preventDefault();

    if( Object.values(citaObj).some( valor => valor.trim() === '' )){
        console.log( 'Todos los campos son obligatorios' );
        return;
    }

    console.log('Despues del If...');
    
 
}