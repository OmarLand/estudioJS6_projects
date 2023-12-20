// let nombre = escape("Delphy;?");
// console.log( nombre );
// console.log(unescape( nombre ))

// document.cookie = "nombre=Omar Jesús";
// document.cookie = "apellido=Landaeta Cedeño";
// let cookies = document.cookie;
// console.log( cookies );

// Creando una Cookie con el navegador
const crearCookie = ( clave, valor ) => {
    const valorEscape = escape( valor );
    let mesSiguiente = new Date();
    mesSiguiente.setMonth( mesSiguiente.getMonth() + 1 );
    //console.log( mesSiguiente );

    document.cookie = `${clave}=${valorEscape};expires=${mesSiguiente}`;
}

crearCookie("marcaPortatil","acer");
crearCookie("tipoEnchufe","europeo");

// Eliminando una Cookie con el navegador
const eliminarCookie = ( clave ) => {
    let mesAnterior = new Date();
    mesAnterior.setMonth( mesAnterior.getMonth() - 1 );
    //console.log( mesSiguiente );

    document.cookie = `${clave}=Y;expires=${mesAnterior}`;
}

//eliminarCookie("tipoEnchufe");

// Obteniendo las Cookies creandolos como un objeto
const obtenerCookies= () =>{
    const cookies = document.cookie;
    const arrayCookies = cookies.split("; ");
    let objetoCookies = {};

    arrayCookies.forEach(cookie => {
        // console.log(cookie);
        const cookieArray = cookie.split("=");
        const keyItem = cookieArray[0];

        objetoCookies[keyItem] = cookieArray[1]

    });

    return objetoCookies;
    // console.log( ">>> ", objetoCookies );
}

 const cookies = obtenerCookies();
 console.log( cookies );

 console.log(`Tengo un portatil marca ${cookies.marcaPortatil} pero su enchufe es de tipo ${cookies.tipoEnchufe}`);
