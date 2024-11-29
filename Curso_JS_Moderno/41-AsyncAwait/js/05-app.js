
const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

function obtenerDatos(){
    fetch(url)
        .then( rpta => rpta.json())
        .then( rpta => console.log( rpta ))
        .catch( error => console.log( error ))

}

