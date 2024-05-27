//Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year')

const max = new Date().getFullYear();
const min = max - 10;

// console.log(max, min);

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // Mostramos los autos al cargar


    // Llena las opciones de años
    llenarSelect();

})


//Funciones
function mostrarAutos(){

    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent =`
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        //Insertar en el HTML
        resultado.appendChild(autoHTML);
    });

}

// Llenar los años del select
function llenarSelect(){

    for( let i = max; i >= min; i-- ){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones al select
    }

}