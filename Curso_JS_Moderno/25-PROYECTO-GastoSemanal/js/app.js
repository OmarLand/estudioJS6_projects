// Variables
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


// Eventos
eventListeners();
function eventListeners(){
    document.addEventListener( 'DOMContentLoaded', preguntarPresupuesto );

    formulario.addEventListener( 'submit', agregarGasto );
}



// Classes
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante    = Number(presupuesto);
        this.gastos      = [];
    }
}

class UI{
    insertarPresupuesto( cantidad ){
        // Extraigo los valores
        const { presupuesto, restante } = cantidad;

        // Los añado al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        // Crear el DIV 
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Crear mensaje de error
        divMensaje.textContent = mensaje;

        // insertar en el HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // Quitar mensaje de error
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);

    }

}


// Instanciar
const ui = new UI();
let presupuesto;



// Funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    //console.log( '>>>', parseFloat(presupuestoUsuario) );

    if( presupuestoUsuario ==='' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0 ){
        window.location.reload();
    }

    // Presupuesto válido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log( presupuesto );

    ui.insertarPresupuesto( presupuesto )
}

// Añade gastos
function agregarGasto(e){
    e.preventDefault();

    // Leer los datos del formulario
    const nombre   = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    // Validamos campos
    if( nombre === '' || cantidad === '' ){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if( cantidad <= 0 || isNaN(cantidad) ) {
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;
    }

    console.log('Agregando el gasto...');
}