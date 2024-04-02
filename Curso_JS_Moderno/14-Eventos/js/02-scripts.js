const nav = document.querySelector('.navegacion');

// registrar un evento

// mouseenter, mouseout, click, mousedown, mouseup
// dblclick

nav.addEventListener('mouseenter', () =>{
    console.log('Entrando en la navegacion');
    nav.style.backgroundColor = 'transparent'
})

nav.addEventListener('mouseout', () =>{
    console.log('Saliendo de la navegacion');

    nav.style.backgroundColor = 'black'
})