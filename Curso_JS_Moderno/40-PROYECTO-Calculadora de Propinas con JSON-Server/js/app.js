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

        // Verificar si existe ya un alerta
        const existeAlerta = document.querySelector('.invalid-feedback');

        if(!existeAlerta){
            const alerta = document.createElement('div');
            alerta.classList.add('invalid-feedback', 'd-block','text-center');
            alerta.textContent = 'Todos los campos son obligatorio';
            document.querySelector('.modal-body form').appendChild(alerta);

            // Eliminamos alerta
            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }

        return;

    } 
        console.log('Todos los campos están correctos');
    
    
}