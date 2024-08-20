// Selectores
const pacienteInput    = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput       = document.querySelector('#email');
const fechaInput       = document.querySelector('#fecha');
const sintomasInput    = document.querySelector('#sintomas');

const formulario      = document.querySelector('#formulario-cita');
const contenedorCitas = document.querySelector('#citas');

const btnEditar       = document.querySelector('.btn-editar');

// btnEditar?.addEventListener('click', () => {
//     alert('Diste click en el btn-Editar');
// })

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
        this.mostrar();
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

            // Botones Eliminar y editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2','btn-editar');
            btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
            const clone = structuredClone( cita )
            btnEditar.onclick = () => cargarEdicion( clone );


            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            const contenedoresBotones = document.createElement('div');
            contenedoresBotones.classList.add('flex','justify-between', 'mt-10');

            contenedoresBotones.appendChild(btnEditar);
            contenedoresBotones.appendChild(btnEliminar);

            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedoresBotones);
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

    if( Object.values( citaObj ).some( valor => valor.trim() === '' ) ){
        // console.log( 'Todos los campos son obligatorios' );
        new Notificacion({
            texto : 'Todos los campos son obligatorios',
            tipo  : 'error' 
        }) 

        return;
        
    }

    citas.agregar({...citaObj});
    formulario.reset();
    reiniciarObjetoCita();
    
    new Notificacion({
        texto : 'Paciente registrado correctamente.',
        tipo  : 'exito' 
    }) 

}


function reiniciarObjetoCita(){
    //Reiniciar el objeto
    citaObj.paciente    ='';
    citaObj.propietario = '';
    citaObj.email       = '';
    citaObj.fecha       = '';
    citaObj.sintomas    = '';
}

function cargarEdicion( cita ){
    // alert('Hasta dado click...');
    console.log( cita );
    
}