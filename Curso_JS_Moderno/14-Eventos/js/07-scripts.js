// Prevenir un event bubbling con delegation

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e) =>{
    // console.log(e.target.classList);
    if( e.target.classList.contains('titulo') ){
        console.log("Has dado click en título...");
    }

    if( e.target.classList.contains('precio') ){
        console.log("Has dado click en precio...");
    }
    
    if( e.target.classList.contains('card') ){
        console.log("Has dado click en card...");
    }
})