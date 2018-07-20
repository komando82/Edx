import React from 'react'

const apiKey = 'fa45997a'
const apiUrlSearchMovies = `http://www.omdbapi.com/?apikey=${apiKey}&s=`
const apiUrlGetSingleMovie = `http://www.omdbapi.com/?apikey=${apiKey}&i=`

function searchMoviesApi(searchString) {
  return fetch(`${apiUrlSearchMovies}${searchString}`)
    .then(response => response.json())
    .catch(error => {
      console.log('Error fetching and parsing data: ', error)
    });
}

function getMovieByImdbIDApi(imdbID) {
  return fetch(`${apiUrlGetSingleMovie}${imdbID}`)
    .then(response => response.json())
    .catch(error => {
      console.log('Error fetching and parsing data: ', error)
    });
}

export default {
	searchMoviesApi: searchMoviesApi,
	getMovieByImdbIDApi: getMovieByImdbIDApi
}