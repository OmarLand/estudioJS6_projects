function iniciarApp(){

    const selectCategorias = document.querySelector('#categorias');
    selectCategorias.addEventListener('change', seleccionarCategoria)

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

        console.log( url );
        
        
        
    }

}

document.addEventListener('DOMContentLoaded', iniciarApp)
