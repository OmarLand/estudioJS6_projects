// Selectores
const pacienteInput    = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput       = document.querySelector('#email');
const fechaInput       = document.querySelector('#fecha');
const sintomasInput    = document.querySelector('#sintomas');

const formulario      = document.querySelector('#formulario-cita');
const contenedorCitas = document.querySelector('#citas')

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

class AdminCitas {
    constructor(){
        this.citas = [];
        console.log( this.citas );
    }  

    agregar( cita ){
        this.citas = [...this.citas, cita]
        // console.log( this.citas );
        this.mostrar();
    }

    mostrar(){

        // Limpiar el html previo
        while( contenedorCitas.firstChild ){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }

        // Generando las citas
   
        this.citas.forEach(cita => {
            const divCita = document.createElement('div');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');

            const paciente = document.createElement('p');
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;

            const propietario = document.createElement('p');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;

            const email = document.createElement('p');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;

            const fecha = document.createElement('p');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;

            const sintomas = document.createElement('p');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            contenedorCitas.appendChild(divCita);
        })
    }
}

function datosCita (e){
    // console.log(e.target.value);
    citaObj[e.target.name] = e.target.value
    // console.log( citaObj );
};

const citas = new AdminCitas();

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

    citas.agregar(citaObj);
    citas.mostrar();
}
