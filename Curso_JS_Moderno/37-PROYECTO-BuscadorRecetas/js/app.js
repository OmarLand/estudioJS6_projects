function iniciarApp(){

    const selectCategorias = document.querySelector('#categorias');
    selectCategorias.addEventListener('change', seleccionarCategoria);

    const resultado = document.querySelector('#resultado');
    const modal = new bootstrap.Modal('#modal', {})

    obtenerCategorias();

    function obtenerCategorias(){
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then( res =>  res.json() )
            .then( res =>  mostrarCategorias( res.categories ) )
    }

    function mostrarCategorias(categorias = []){
        categorias.forEach( categoria =>{

            const { strCategory } = categoria; 

            // console.log( categoria );
            const option = document.createElement('option');
            option.value = strCategory;
            option.textContent = categoria.strCategory;
            //console.log( option );
            selectCategorias.appendChild(option)
            
        })
    }

    function seleccionarCategoria(e){
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
        fetch(url)
            .then(res => res.json() )
            .then (res => mostrarRecetas( res.meals ) )
    }

    function mostrarRecetas( recetas = [] ){

        limpiarHTML(resultado);

        // console.log( recetas );
        // Iterar en los resultados

        const heading = document.createElement('h2');
        heading.classList.add('text-center', 'text-black','my-5');
        heading.textContent = recetas.length ? 'Resultados' : 'No hay resultados' ;
        resultado.appendChild(heading);
        
        recetas.forEach( receta => {
            const { idMeal, strMeal, strMealThumb } = receta;

            const recetaContenedor = document.createElement('div');
            recetaContenedor.classList.add('col-md-4');

            const recetaCard = document.createElement('div');
            recetaCard.classList.add('card','mb-4')

            const recetaImagen = document.createElement('img');
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt =  `Imagen de la Receta ${strMeal}`;
            recetaImagen.src =  strMealThumb;

            const recetaCardBody = document.createElement('div');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('h3');
            recetaHeading.classList.add('card-title','mb-3');
            recetaHeading.textContent = strMeal;

            const recetaButton = document.createElement('button');
            recetaButton.classList.add('btn', 'btn-danger','w-100');
            recetaButton.textContent = 'Ver Receta';
            // recetaButton.dataset.bsTarget = '#modal';
            // recetaButton.dataset.bsToggle = 'modal';

            recetaButton.onclick = function(){
                seleccionarReceta(idMeal)
            }

            // Inyectar en el código el HTML
            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);

            recetaContenedor.appendChild(recetaCard);

            resultado.appendChild(recetaContenedor);  
        });
    };

    function seleccionarReceta(id){
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`

        fetch( url )
            .then(res => res.json())
            .then(res => mostrarRecetaModal( res.meals[0] ) )
    }

    function mostrarRecetaModal(receta){
        const { idMeal,strInstructions,strMeal,strMealThumb} = receta;
        //console.log(receta);

        // Añadir contenido al modal
        const modalTitle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = strMeal;
        modalBody.innerHTML = `
            <img class='img-fluid' src="${strMealThumb}" alt="receta ${strMeal}" />
            <h3 class='my-3'>Instrucciones</h3>
            <p>${strInstructions}</p>
            <h3 class='my-3'>Ingredientes:</h3>
        `;

        const listGroup = document.createElement('ul');
        listGroup.classList.add('list-group');

        // Mostrar Cantidades e ingredientes
        for( let i = 1; i<=20; i++ ){
            if( receta[`strIngredient${i}`] ){
                const ingrediente = receta[`strIngredient${i}`];
                const cantidad    = receta[`strMeasure${i}`];

                const ingredienteLi = document.createElement('li');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`
            
                listGroup.appendChild(ingredienteLi)
            }
        }

        modalBody.appendChild(listGroup);

        const modalFooter = document.querySelector('.modal-footer');
        limpiarHTML(modalFooter);
        
        // Botones de cerrar y favoritos
        const btnFavorito = document.createElement('button');
        btnFavorito.classList.add('btn', 'btn-danger', 'col');
        btnFavorito.textContent = 'Guardar Favorito';


        // LocalStorage
        btnFavorito.onclick = function(){
            agregarFavorito();
        }

        
        const btnCerrar = document.createElement('button');
        btnCerrar.classList.add('btn', 'btn-secondary', 'col');
        btnCerrar.textContent = 'Cerrar';
        btnCerrar.dataset.bsDismiss = 'modal'
        // btnCerrar.onclick = function(){
        //     modal.hide();
        // }
        
        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrar);
        
        // Muestra el Modal
        modal.show()
    }

    function agregarFavorito(){
        console.log('Agregando...');
        
    }

    function limpiarHTML(resultado){
        while( resultado.firstChild ){
            resultado.removeChild(resultado.firstChild);
        }
    }

}

document.addEventListener('DOMContentLoaded', iniciarApp)
