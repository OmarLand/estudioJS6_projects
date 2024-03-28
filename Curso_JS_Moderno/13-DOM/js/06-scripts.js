// Seleccionando el texto del DOM

const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log( encabezado );

//Cambio texto del DOM
//document.querySelector('.contenido-hero h1').textContent = "Nuevo header"

//Cambiando imagen
const imagen = document.querySelector('.card img');
imagen.src='img/hacer1.jpg'