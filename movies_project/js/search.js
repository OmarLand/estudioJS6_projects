// console.log( "Página del buscador..." );


const searchMovies = async () =>{
    const textSearch = document.getElementById("search-movie").value;
    //console.log( textSearch );
    if( textSearch.length < 3 ) { return; }
    const movies = await getMovies( textSearch );
    // console.log( ">>> ", movies );

    let html = ""

    movies.forEach(movie => {
       const { id, title, overview, poster_path } = movie; 
       const urlmoreInfo = `../movie.html?id=${id}`;

       const urlImage=`https://image.tmdb.org/t/p/w500${poster_path}`;

    //    console.log( "Imagen >>>", urlImage );

    html += `
    
        <div class="col-4 custom-card">
            <div class="card">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${urlImage}" class="card-img" alt="${title}"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${overview.substr(0,40)}...</p>
                            <a href="${urlmoreInfo}" class="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    `
    });
    document.getElementsByClassName("list-cards")[0].innerHTML = html;
}


const getMovies = ( textSearch ) => {
    // console.log( textSearch );
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzNlOTA2MWRkYWNiNTJjMzYxMDgyYWI3NjcyZjQxZiIsInN1YiI6IjVlYTg2MmRmYjdmYmJkMDAxZDM5Njk2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9DdxM-dSCMmQ29M_-BC25VuzPg6cel-EEVkXm-tOefY'
        }
      };
      
      return fetch(`https://api.themoviedb.org/3/search/movie?query=${textSearch}&include_adult=true&language=es-ES&page=1`, options)
        .then(response => response.json())
        .then(result => result.results)
        .catch(err => console.error(err));

}