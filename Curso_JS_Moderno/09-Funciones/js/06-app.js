// Funciones con parametros por default y argumentos

function saludar(nombre="N/A", apellido="N/A"){
    console.log( `Hola ${nombre} ${apellido}, ¿Como estas?` );
}

saludar("Omar", "Landaeta");
saludar()