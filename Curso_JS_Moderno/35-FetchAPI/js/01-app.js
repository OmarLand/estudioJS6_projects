const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);


function obtenerDatos(){

    const url = 'data/datos.txt'

    fetch( url )
        // Comprobamos conexion con url si esta todo OK (200)
        .then( res => {
            console.log(res);
            console.log(res.status);
            console.log(res.statusText);
            console.log(res.url);
            console.log(res.type);

            return res.text();
        })

        // Traigo los datos para mostrarlos
        .then( datos =>{
            console.log( datos );
            
        })
        // Capturo el error y lo muestro
        .catch( error =>{
            console.log( '>', error );
            
        })
}