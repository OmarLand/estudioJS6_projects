const cargarAPIBtn = document.querySelector( '#cargarAPI' );
cargarAPIBtn.addEventListener( 'click', mostrarDatos );

function mostrarDatos(){
    
    const url = 'https://picsum.photos/list';

    fetch( url )
        .then( response => response.json() )
        .then( response => mostrarHTML( response ) )

}

function mostrarHTML( datos ){
    const contenido = document.querySelector('.contenido');
    let html = '';

    datos.forEach( perfil => {
        const { author, post_url } = perfil;

        html +=`
            <p>Autor: ${author}</p>
            <a href="${post_url}" target="_blank">Ver imagen</a>
        `
        
    });

    contenido.innerHTML = html;
}