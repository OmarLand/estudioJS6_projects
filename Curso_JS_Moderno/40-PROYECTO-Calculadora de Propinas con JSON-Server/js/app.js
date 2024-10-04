const cliente = {
    mesa   : '',
    hora   : '',
    pedido : [],
};

const btnGuardarCliente = document.querySelector('#guardar-cliente');

btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente(){
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    // Resivamos si los campos estan vacios
    const camposVacios = [ mesa, hora ].some(campo => campo === '');

    if( camposVacios ){
        console.log('Si hay al menos un campo vacio');
    } else {
        console.log('Tdos los campos están correctos');
        
    }
    
}