// API token f73e9061ddacb52c361082ab7672f41f

function getPeliculasPopulares(){
    
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzNlOTA2MWRkYWNiNTJjMzYxMDgyYWI3NjcyZjQxZiIsInN1YiI6IjVlYTg2MmRmYjdmYmJkMDAxZDM5Njk2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9DdxM-dSCMmQ29M_-BC25VuzPg6cel-EEVkXm-tOefY'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            const peliculas = response.results;

            peliculas.forEach( peli  => {
                const { title, vote_count, vote_average, poster_path } = peli
                console.log( title );
            });
        })
        // Muestro el error si lo hubiese
        .catch(err => console.error(err));
        
      
}

getPeliculasPopulares();