// Comunicación entre funciones

iniciarApp();


function iniciarApp() {
    console.log("Iniciando App");
    segundaFuncion();
}

function segundaFuncion(){
    console.log("Hola soy la segunda función");
    usuarioAuth("Omar");
}

function usuarioAuth( usuario ){
    console.log( "Autenticando usuario... espere" );
    console.log( `Usuario autenticado: ${usuario}` );
}