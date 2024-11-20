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
    // Extraemos el pedido actual
    let { pedido } = cliente;

    // Revisar si la cantidad sea mayor a cero
    if( producto.cantidad > 0 ){

        // Comprueba si el elemento existe en el array
        if( pedido.some( articulo => articulo.id === producto.id ) ){
            // El articulo ya existe, actualizar la cantidad
            const pedidoActualizado = pedido.map( articulo => {
                if( articulo.id === producto.id ){
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            });
            // Se asigna el nuevo array a cliente.pedido
            cliente.pedido = [ ...pedidoActualizado ];
        } else {
            // El articulo no existe, lo añadimos en el arreglo del pedido
            cliente.pedido = [ ...pedido, producto ];
        }
        
        
    } else {
        // console.log('No es mayor va 0');
        // Eliminar elementos cuando la cantidad sea 0
        const resultado = pedido.filter( articulo => articulo.id !== producto.id );
        cliente.pedido = [ ...resultado ];
    }   
    
    // Limpiar el HTML previo visualizado
    limpiarHTML();

    // Mostrar el resumen
    actualizarResumen();
}

function actualizarResumen(){
    const contenido = document.querySelector('#resumen .contenido');

    const resumen = document.createElement('div')
    resumen.classList.add('col-md-6','card','py-5','px-3','shadow');

    // Información de la mesa:
    const mesa = document.createElement('p')
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('span');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');

    // Información de la Hora:
    const hora = document.createElement('p')
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('span');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    // Agregando los elementos padres:
    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    // Titulo de la sección
    const heading = document.createElement('h3');
    heading.textContent = 'Platillos Consumidos';
    heading.classList.add('my-4','text-center');

    // Iterando sobre el array de pedidos:
    const grupo = document.createElement('ul');
    grupo.classList.add('list-group'); 

    const {pedido} = cliente;
    pedido.forEach( articulo => {
        const {nombre, cantidad, precio, id} = articulo;

        const lista = document.createElement('li');
        lista.classList.add('list-group-item');

        // Añadiendo el nombre del producto
        const nombreEle = document.createElement('h4');
        nombreEle.classList.add('my-4');
        nombreEle.textContent = nombre;

        // Cantidad del artículo:
        const cantidadEle = document.createElement('p');
        cantidadEle.classList.add('fw-bold');
        cantidadEle.textContent = 'Cantidad: ';

        const cantidadValor = document.createElement('span');
        cantidadValor.classList.add('fw-normal');
        cantidadValor.textContent = cantidad;

        // Precio del artículo
        const precioEle = document.createElement('p');
        precioEle.classList.add('fw-bold');
        precioEle.textContent = 'Cantidad: ';

        const precioValor = document.createElement('span');
        precioValor.classList.add('fw-normal');
        precioValor.textContent = `${precio} €`;
    
        // Subtotal Producto
        const subtotalEle = document.createElement('p');
        subtotalEle.classList.add('fw-bold');
        subtotalEle.textContent = 'Subtotal: ';

        const subtotalValor = document.createElement('span');
        subtotalValor.classList.add('fw-normal');
        subtotalValor.textContent = calculaSubtotal(cantidad, precio);

        //Agregar valores a sus contenedores:
        cantidadEle.appendChild(cantidadValor);
        precioEle.appendChild(precioValor);
        subtotalEle.appendChild(subtotalValor);

        // Agregando elementos al LI
        lista.appendChild( nombreEle );
        lista.appendChild( cantidadEle );
        lista.appendChild( precioEle );
        lista.appendChild( subtotalEle );

        // Agregar lista al grupo principal:
        grupo.appendChild(lista);

    });

    // Añadiendo el contenido:
    resumen.appendChild( mesa );
    resumen.appendChild( hora );
    resumen.appendChild( heading );
    resumen.appendChild( grupo );

    contenido.appendChild( resumen );
    
}

function limpiarHTML(){
    const contenido = document.querySelector('#resumen .contenido');

    while( contenido.firstChild ){
        contenido.removeChild( contenido.firstChild );
    }
}

function calculaSubtotal( cantidad, precio ){
    return `${cantidad * precio} €`
}