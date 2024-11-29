
function descargarNuevosClientes(){
    return new Promise( (resolve) =>{
        console.log( 'Descargando clientes...' );
        
        setTimeout(() => {
            resolve('Los clientes han sido descargados');
        }, 3000);
    })
}

function descargarNuevosPedidos(){
    return new Promise( (resolve) =>{
        console.log( 'Descargando Pedidos...' );
        
        setTimeout(() => {
            resolve('Los Pedidos han sido descargados');
        }, 3000);
    })
}

const app = async() => {

    try {

        const clientes = await descargarNuevosClientes();
        console.log( clientes );
        
        const pedidos = await descargarNuevosPedidos();
        console.log( pedidos );
        
        
    } catch (error) {
        console.log( error );
        
    }

}

app();