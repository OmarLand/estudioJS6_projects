const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos)

function obtenerDatos(){

    const url = 'data/empleado.json';
    fetch( url )
       .then(res => {  
           return res.json();
       })
       .then( res =>{
        mostrarHTML( res );
       })

}

function mostrarHTML({ id, nombre, empresa, trabajo }) {
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>ID: ${id}</p>
        <p>Empleado: ${nombre}</p>
        <p>Empresa: ${empresa}</p>
        <p>Cargo: ${trabajo}</p>
    `;
}