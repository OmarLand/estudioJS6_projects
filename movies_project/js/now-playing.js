document.addEventListener("DOMContentLoaded", () => {
    let { page } = getUrlVars();
    page == undefined ? page = 1 : null; 
    renderNewsMovies( page );
});

const getUrlVars = () => {
    let vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function( m, key, value ) {
        vars[key] = value;
    });
    return vars;
}

const getNewsMovies = ( page ) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzNlOTA2MWRkYWNiNTJjMzYxMDgyYWI3NjcyZjQxZiIsInN1YiI6IjVlYTg2MmRmYjdmYmJkMDAxZDM5Njk2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9DdxM-dSCMmQ29M_-BC25VuzPg6cel-EEVkXm-tOefY'
        }
    };  
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=${page}`, options)
        .then( response => response.json() )
        .then( result => result.results )
        .catch( err => console.error(err) );
}

const renderNewsMovies = async ( page ) => {
    const movies = await getNewsMovies( page );
    let html = ""

    movies.forEach( movie => {
        const { id, title, poster_path } = movie;
        const urlImage = `https://image.tmdb.org/t/p/w500${poster_path}`;
        const urlMoreInfo = `../movie.html?id=${id}`;

        html += `
            <div class="col-3 col-custom">
                <a href="${urlMoreInfo}" class="card custom-card"0>
                    <img src="${urlImage}" class="card-img-top" alt="${title}" />
                    <div class="card-body">
                        <h4 class="card-title text-center m-0">${title}<h4>
                    </div>
                </a>
            </div>
        `;
    });

    document.getElementsByClassName("list-cards")[0].innerHTML = html;
}