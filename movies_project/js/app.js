document.addEventListener("DOMContentLoaded", async () => {
    const movies = await getNewMovies();
    console.log( movies );
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
        .catch( err => console.error(err)   );
}