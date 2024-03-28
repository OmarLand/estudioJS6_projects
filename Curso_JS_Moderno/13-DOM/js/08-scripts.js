// Usando el Traversing desde el DOM

// const navegacion = document.querySelector('.navegacion');
// console.log(navegacion);
// console.log( navegacion.childNodes );
// console.log( navegacion.children );


// console.log( navegacion.children[1].nodeName );
// console.log( navegacion.children[1].nodeType );

const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo contenido desde traversing the DOM'

// card.children[0].src = 'img/hacer3.jpg'
// console.log( card.children[0] );

// Traversing the hijo al padre

console.log( card.parentNode );
console.log( card.parentElement.parentElement.parentElement );

console.log( card );
console.log( card.nextElementSibling );
console.log( card.nextElementSibling.nextElementSibling );
