// Event Bubbling

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo  = document.querySelector('.titulo');

cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en Card');
});

infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en Info');
});

titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en Titulo');
})