document.addEventListener("DOMContentLoaded", () => {
    renderNewsMovies();
    renderPopularMovies();
    renderTopRatedMovies();
});

//now_playing, popular, top_rated
const getType = (type) =>{

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzNlOTA2MWRkYWNiNTJjMzYxMDgyYWI3NjcyZjQxZiIsInN1YiI6IjVlYTg2MmRmYjdmYmJkMDAxZDM5Njk2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9DdxM-dSCMmQ29M_-BC25VuzPg6cel-EEVkXm-tOefY'
        }
    };
      
    return fetch(`https://api.themoviedb.org/3/movie/${type}?language=es-ES&page=1`, options)
        .then( response => response.json()  )
        .then( response => response.results )
        .catch( err => console.error(err)  );

}

const renderNewsMovies = async() =>{
    const newMovies = await getType("now_playing");
    //console.log( newMovies );

    let html = '';

    newMovies.forEach( (movie, index) => {

        const { id, title, overview, backdrop_path } = movie;
        const urlImage = `https://image.tmdb.org/t/p/w500${backdrop_path}`
        const urlMovie = `../movie.html?id=${id}`
        //console.log( index );
        
        // Renderizo las imagenes del carrusel
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

    // Renderizo en el HTML los controles flecha del carousel y conecto con ID para poder controlarlo
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

const renderPopularMovies = async () => {
    const movies = await getType("popular");
    // console.log( movies );

    let html = "";

    movies.forEach( (movie, index) =>{
        // console.log(movie);

        const { id, title, poster_path } = movie;
        const movieCover = `https://image.tmdb.org/t/p/w500${poster_path}`;
        const urlMovie   = `../movie.html?id=${id}`

        if( index < 5 ){
            html+= `
            
                <li class="list-group-item">
                    <img src="${movieCover}" alt="${title}">
                    <h3> ${title} </h3>
                    <a href="${urlMovie}" class="btn btn-primary">Ver más</a>
                </li>
            
            `;
        }
        document.getElementsByClassName("now-playing__list")[0].innerHTML = html;
    })
}

const renderTopRatedMovies = async() => {
    const movies = await getType("top_rated");
    // console.log( movies );

    let html = "";
    movies.forEach( (movie, index) => {
        const { id, title, poster_path } = movie;
        const movieCover = `https://image.tmdb.org/t/p/w500${poster_path}`;
        const urlMovie = `../movie.hmtl?id=${id}`;

        if( index < 5 ) {
            html += `
                <li class="list-group-item">
                    <img src="${movieCover}" alt="${title}">
                    <h3>${title}</h3>
                    <a href="${urlMovie}" class="btn btn-primary">Ver mas</a>
                </li>
            `;
        }
    })
    document.getElementsByClassName("top-rated-playing__list")[0].innerHTML = html;
}