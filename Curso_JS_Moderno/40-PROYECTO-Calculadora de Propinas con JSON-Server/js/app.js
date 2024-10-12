let cliente = {
    mesa   : '',
    hora   : '',
    pedido : [],
};

const categorias = {
    1 : 'Comida',
    2 : 'Bebidas',
    3 : 'Postres',
}

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
'7'
    }
        // Asignamos datos del formulario a cliente: 
        cliente = { ...cliente, mesa, hora }
        
        // Ocultar Modal
        const modalFormulario = document.querySelector('#formulario');
        const modalBootStrap  = bootstrap.Modal.getInstance(modalFormulario);
        modalBootStrap.hide();

        // Mostrar las secciones:
        mostrarSecciones();

        // Obtener Platillos de la API Json-Server:
        obtenerPlatillos(); 
}

function mostrarSecciones(){
    const seccionesOcultas = document.querySelectorAll('.d-none');

    seccionesOcultas.forEach(seccion => seccion.classList.remove( 'd-none') )
}

function obtenerPlatillos(){
     const url = 'http://localhost:3000/platillos';
     fetch(url)
        .then(res => res.json())
        .then(res => mostrarPlatillos( res ) )
        .catch( error => console.log( '>>>', error ) )
}

function mostrarPlatillos( platillos ){
    // console.log( platillos );
    const contenido = document.querySelector('#platillos .contenido');

    platillos.forEach(platillo => {
        // console.log( platillo );
        const row = document.createElement('div', 'py-3', 'boder-top');
        row.classList.add('row');

        const nombre = document.createElement('div');
        nombre.classList.add('col-md-4');
        nombre.textContent = platillo.nombre;

        const precio = document.createElement('div');
        precio.classList.add('col-md-3', 'fw-bold');
        precio.textContent = `${platillo.precio} €`;

        const categoria = document.createElement('div');
        categoria.classList.add('col-md-3');
        categoria.textContent = categorias[ platillo.categoria ];

        const inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.min  = 0;
        inputCantidad.id   = `producto-${platillo.id}`;
        inputCantidad.classList.add('form-control');

        // Función para detectar la cantidad y el platillo que se esta agregando
        inputCantidad.onchange = function() {
            const cantidad = parseInt(inputCantidad.value);
            agregarPlatillo({ ...platillo, cantidad });
        };


        const agregar = document.createElement('div');
        agregar.classList.add('col-md-2');
        agregar.appendChild( inputCantidad );


        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(agregar);

        contenido.appendChild(row);
        
    })
    
}

function agregarPlatillo(producto){
    console.log( producto );
    
}