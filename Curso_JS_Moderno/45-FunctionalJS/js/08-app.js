// const cliente = 'Omar';

// function mostrarCliente(){
//     const cliente = 'Juan'
//     console.log( cliente  );
    
// }

const obtenerCliente = () => {
    const nombre = 'Omar';

    function muestraNombre(){
        console.log(nombre); 
    }
    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();