
const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

// Usando Promises
function obtenerDatos(){
    fetch(url)
        .then( rpta => rpta.json())
        .then( rpta => console.log( rpta ))
        .catch( error => console.log( error ))

}


// Usando Async y Awaits
async function  obtenerDatos(){
    try {
        const rpta = await fetch( url );
        const resp = await rpta.json();
        console.log( resp );
    } catch (error) {
        console.log(error);
        
    }
    
}