function iniciarApp(){

    obtenerCategorias();

    function obtenerCategorias(){
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then( res => {
                return res.json();
            })
            .then( res => {
                console.log( res );
                
            })
        
    }

}

document.addEventListener('DOMContentLoaded', iniciarApp)
