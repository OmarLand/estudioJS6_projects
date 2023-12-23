document.addEventListener("DOMContentLoaded", async () => {
    
    renderNewsMovies();

});


const getNewMovies = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzNlOTA2MWRkYWNiNTJjMzYxMDgyYWI3NjcyZjQxZiIsInN1YiI6IjVlYTg2MmRmYjdmYmJkMDAxZDM5Njk2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9DdxM-dSCMmQ29M_-BC25VuzPg6cel-EEVkXm-tOefY'
        }
    };
      
    return fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1', options)
        .then( response => response.json()  )
        .then( response => response.results )
        .catch( err => console.error(err)  );
}

const renderNewsMovies = async() =>{
    const newMovies = await getNewMovies();
    //console.log( newMovies );

    let html = '';

    newMovies.forEach( (movie, index) => {

        const { id, title, overview, backdrop_path } = movie;
        const urlImage = `https://image.tmdb.org/t/p/w500${backdrop_path}`
        const urlMovie = `../movie.html?id=${id}`
        //console.log( index );
        
        html += `
            <div class="carousel-item ${index === 0 ? "active" : null}" style="background-image: url('${urlImage}')">
                <div class="carousel-caption">
                    <h5>${title}</h5>
                    <p>${overview}</p>
                    <a href="${urlMovie}" class="btn btn-primary">Más información<a/>
                </div>
            </div>
        `; 
    });

    html += `
        <button class="carousel-control-prev" type="button" data-target="#carousel-news-movies" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carousel-news-movies" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
    `;

    document.getElementsByClassName('list-news-movies')[0].innerHTML = html;
}