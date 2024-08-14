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
        // console.log( 'Todos los campos son obligatorios' );
        const notificacion = new Notificacion({
            texto : 'Todos los campos son obligatorios',
            tipo  : 'error' 
        }) 

        // console.log('>>>', notificacion );
        notificacion.mostrar();
        return;
        
    }

    console.log('Despues del If...');
}

class Notificacion {

    constructor({texto, tipo}) {
        this.texto = texto;
        this.tipo  = tipo;

        // this.mostrar();
    }

    mostrar(){
        // Crear la notificacion
        const alerta = document.createElement('div');
        alerta.classList.add('text-center','w-full','p-3','text-white','my-5','alert','uppercase','font-bold','text-sm');

        // Eliminar alertas duplicadas
        const alertaPrevia = document.querySelector('.alert');
        
       alertaPrevia?.remove()

        // Si es de tipo error, agrega una clase 
        this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');

        // Mensaje de error
        alerta.textContent = this.texto;

        // Insertar al DOM
        formulario.parentElement.insertBefore(alerta, formulario);

        // Eliminar despues de 5 segundos el alerta
        setTimeout(() => {
            alerta.remove();
        }, 5000);
        
    }

}