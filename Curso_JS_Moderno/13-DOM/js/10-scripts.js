// Creando elementos HTML desde el DOM

const enlace = document.createElement('a');

//Añadiendo un texto
enlace.textContent = 'Nuevo Enlace'

// AÑadiendo href
enlace.href = '/nuevo-enlace';
enlace.target ="_blank";
enlace.onclick = miFuncion;

console.log( enlace );

// Selecciono la navegacion
const navegacion = document.querySelector('.navegacion');
console.log( navegacion.children ); // Miro los enlaces y sus posiciones
// navegacion.appendChild( enlace ) // Inserto el nuevo enlace

navegacion.insertBefore( enlace, navegacion.children[1] )

function miFuncion() {
    alert("Pruebas pruebas");
}

// Creando un Card
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add = ('categoria', 'Concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add = ('Titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '800€ Por persona';
parrafo3.classList.add('precio');

// Crer div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Creando una imagen para el card
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg'
imagen.alt = 'Texto lo que sea'

// Crear el Card
const card = document.createElement('div')
card.classList.add('card');

// Asignar la imagen
card.appendChild(imagen);
card.appendChild(info);

// console.log( imagen );
// console.log( info );

console.log( card );

//insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card)