function descargarClientes(){
    return new Promise( (resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if(!error){
                resolve('El Listado de clientes esta perfecto')
            } else {
                reject('Error en la conexión !')
            }
        }, 3000);
    })
}

// Async await
const ejecutar = async() => {
    try {
        const respuesta = await descargarClientes();

        console.log( 2 + 2 );
        console.log( respuesta );
        
        
    } catch (error) {
        console.error( error );
    }
}

ejecutar();