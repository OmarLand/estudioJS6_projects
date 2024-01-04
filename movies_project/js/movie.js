let MOVIE_ID = "";

document.addEventListener("DOMContentLoaded", () =>{
    // console.log("Página cargada!!!");
    MOVIE_ID = getUrlVars().id;
    renderMoviesDetails(MOVIE_ID);

});


const getUrlVars = () => {
    let vars = {};
    // console.log( window.location.href );
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function( m, key, value ) {
        vars[key] = value;
    });
    return vars;
    // console.log(">>>> ", vars );
}

const getMoviesDetails = ( movieId ) => {
    // const url = ``;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzNlOTA2MWRkYWNiNTJjMzYxMDgyYWI3NjcyZjQxZiIsInN1YiI6IjVlYTg2MmRmYjdmYmJkMDAxZDM5Njk2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9DdxM-dSCMmQ29M_-BC25VuzPg6cel-EEVkXm-tOefY'
        }
      };
      
      return fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=es-ES`, options)
        .then(response => response.json())
        .then(result => result)
        .catch(err => console.error(err));
}

const renderMoviesDetails = async ( movieId ) => {
    const movieDetails = await getMoviesDetails( movieId )
    console.log( movieDetails );
    const { backdrop_path, poster_path, title } = movieDetails;
    renderBackground(backdrop_path)
    renderPoster( poster_path, title );
}

const renderBackground = ( backdrop_path ) => {
    const urlBackground = `https://image.tmdb.org/t/p/w500${backdrop_path}`

    document.getElementsByClassName("movie-info")[0].style.backgroundImage = `url('${urlBackground}')`;
}

const renderPoster = ( poster_path, title ) => {
    const urlPoster = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const html = `<img src="${urlPoster}" class="img-fluid movie-info__poster-img" alt="${title}" />`
    document.getElementsByClassName("movie-info__poster")[0].innerHTML = html;
}
