const aplicarDescuento = new Promise((resolve, reject) => {

    const descuento = false;

    if( descuento ){
        resolve('El descuento ha sido aplicado')
    } else {
        reject('No se ha podido aplicar el descuento')
    }

});

//console.log( aplicarDescuento );
// Controlando los errores un poco .then .catch
aplicarDescuento
    .then( res =>{
        console.log('>', res);
    })
    .catch( error =>{
        console.log('>', error);
        
    } )


// Hay tres posibles respuestas
// fullfilled -> Ha sido resuelto correctamente la condición
// rejected   -> No ha sido resuelta la condición
// pending    -> No se pudo resolver, pero tampoco fue rechazado