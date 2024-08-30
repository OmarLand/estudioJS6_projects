const paises = ['Venezuela','España','Reino Unido','Francia','Portugal','Luxenburgo'];

function nuevoPais(pais, callBack){
    setTimeout(() => {
        console.log('###########');
        paises.push(pais);
        callBack();
    }, 2000);
}

function mostrarPaises(){
    setTimeout(() => {
        paises.forEach( pais =>{
            console.log('>', pais); 
        });
    }, 1000);
}

mostrarPaises();

nuevoPais('Alemania', mostrarPaises)