import React from 'react'

class MoviesService extends React.Component {

  constructor() {
    super()

    this.apiKey = 'fa45997a'
    this.apiUrlSearchMovies = `http://www.omdbapi.com/?apikey=${this.apiKey}&s=`
    this.apiUrlGetSingleMovie = `http://www.omdbapi.com/?apikey=${this.apiKey}&i=`
  }

  searchMoviesService(searchString, page = 1) {
    let pageQuery = (page === 1) ? '' : `&page=${page}`

    return fetch(`${this.apiUrlSearchMovies}${searchString}${pageQuery}`)
      .then(response => response.json())
      .catch(error => {
        console.log('Error fetching and parsing data: ', error)
      });
  }

  getMovieByImdbIDService(imdbID) {
    return fetch(`${this.apiUrlGetSingleMovie}${imdbID}`)
      .then(response => response.json())
      .catch(error => {
        console.log('Error fetching and parsing data: ', error)
      });
  }
}

export default MoviesService