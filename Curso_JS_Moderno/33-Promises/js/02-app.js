const paises = [];

function nuevoPais(pais, callback){
    paises.push(pais);
    console.log(`Añadiendo *${pais}*`);
    callback();
    
}

function mostrarPaises(){
    console.log('>', paises);
    
}


function inicialCallBackHell(){
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises);

        setTimeout(() => {
            nuevoPais('España', mostrarPaises)
            setTimeout(() => {
                nuevoPais('Venezuela', mostrarPaises)
            }, 3000);
        }, 3000);
    }, 3000);
}


inicialCallBackHell();