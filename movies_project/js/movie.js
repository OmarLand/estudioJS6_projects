// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzNlOTA2MWRkYWNiNTJjMzYxMDgyYWI3NjcyZjQxZiIsInN1YiI6IjVlYTg2MmRmYjdmYmJkMDAxZDM5Njk2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9DdxM-dSCMmQ29M_-BC25VuzPg6cel-EEVkXm-tOefY'
//     }
// };
  
// return fetch(`https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=1`, options)
//     .then( response => response.json()  )
//     .then( response => response.results )
//     .catch( err => console.error(err)  );

let MOVIE_ID = "";

document.addEventListener("DOMContentLoaded", () =>{
    // console.log("Página cargada!!!");
    getUrlVars();
});

const getUrlVars = () => {
    let vars = {};
    console.log( window.location.href );
}