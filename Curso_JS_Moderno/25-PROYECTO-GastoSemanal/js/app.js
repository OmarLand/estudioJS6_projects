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

    nuevoGasto(gasto){
        // console.log("Gasto...");
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0 );
        // console.log( gastado );
        this.restante = this.presupuesto - gastado;

        //console.log( this.restante );
    }

    eliminarGasto( id ){
        // console.log( "Desde la clase..." );
        this.gastos = this.gastos.filter( gasto => gasto.id !== id );
        // console.log( this.gastos );
        this.calcularRestante();
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

    agregarGastoListado(gastos){

        this.limpiarHTML(); // ELiminamos el HTML previo
        
        // Iterar sobre los gastos
        gastos.forEach( gasto => {
            const { cantidad, nombre, id } = gasto;

            // Creando un LI html
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id

            // Agregar el HTML del gasto 
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">${cantidad} €</span>`;


            // Botón para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = `Borrar &times;`
            btnBorrar.onclick = () => {
                presupuesto.eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            // Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
        })
    }
    limpiarHTML(){
        while( gastoListado.firstChild ){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }
    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestObj){
        const { presupuesto, restante } = presupuestObj;

        const restanteDiv = document.querySelector('.restante');

        // Comprobar 25% y el 50%
        if( (presupuesto / 4) > restante ){
            // console.log('Has gastado el 75%');
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-danger')
        } else if ( (presupuesto / 2) > restante ){
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning')
        } else {
            restanteDiv.classList.remove('alert-danger','alert-warning');
            restanteDiv.classList.add('alert-sucess');
        }

        // Si el total es menor de Cero
        if( restante <= 0 ){
            ui.imprimirAlerta('¡Oh, oh! Se acabó tu presupuesto...','error');

            formulario.querySelector('button[type="submit"]').disabled = true;
        }
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
    // console.log( presupuesto );

    ui.insertarPresupuesto( presupuesto )
}

// Añade gastos
function agregarGasto(e){
    e.preventDefault();

    // Leer los datos del formulario
    const nombre   = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    // Validamos campos
    if( nombre === '' || cantidad === '' ){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if( cantidad <= 0 || isNaN(cantidad) ) {
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;
    }

    // Generar un objeto con el gasto
    const gasto = { nombre, cantidad, id: Date.now() }

    // Añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);

    // Mensaje de todo correcto
    ui.imprimirAlerta('Gasto agregado Correctamente');

    // Imprimir los gastos
    const { gastos, restante } = presupuesto
    ui.mostrarGastos( gastos );

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

    // Reinicio del formulario
    formulario.reset();

}

function eliminarGasto(id){
    // Eliminar el objeto
    presupuesto.eliminarGasto(id);

    // Elimina los gastos del HTMLs
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos( gastos );
    ui.actualizarRestante( restante );
    ui.comprobarPresupuesto( presupuesto );
}