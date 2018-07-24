const apiKey = 'fa45997a'
const apiUrlSearchMovies = `http://www.omdbapi.com/?apikey=${apiKey}&s=`
const apiUrlGetSingleMovie = `http://www.omdbapi.com/?apikey=${apiKey}&i=`

function searchMoviesService(searchString, page = 1) {
  let pageQuery = (page === 1) ? '' : `&page=${page}`

  return fetch(`${apiUrlSearchMovies}${searchString}${pageQuery}`)
    .then(response => response.json())
    .catch(error => {
      console.log('Error fetching and parsing data: ', error)
    });
}

function getMovieByImdbIDService(imdbID) {
  return fetch(`${apiUrlGetSingleMovie}${imdbID}`)
    .then(response => response.json())
    .catch(error => {
      console.log('Error fetching and parsing data: ', error)
    });
}

export default {
  searchMoviesService,
  getMovieByImdbIDService
}