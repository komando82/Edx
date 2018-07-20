import React from 'react'
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'

import moviesService from '../service/MoviesService'

import MoviesRow from '../components/MoviesRow'
import SearchInput from '../components/SearchInput'

import style from './Screen.style'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
	  movies: [],
	  searchTerm: ''
	}

  searchMovies = (text) => {
    if (text === '') return
    
    moviesService.searchMoviesApi(text)
      .then(data => {
        if (data.Response === "False") {
          this.setState({
            searchTerm: text,
            movies: []
          })

          throw Error(data.Error)
        }

        this.setState({
          searchTerm: text,
          movies: data.Search
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data: ', error)
      });
  }

  changeScreen = (data) => {
    this.props.navigation.navigate('routeMovieDetail', { 
      title: data.title,
      imdbID: data.imdbID 
    })
  }

  render() {
    return (
      <View style={style.container}>
        <SearchInput onChange={this.searchMovies}/>
        {
          this.state.movies.length === 0 || this.state.searchTerm === ''
          ? (<Text style={style.paddingHorizontal}>No results</Text>)
          : (
            <FlatList
              data={this.state.movies}
              renderItem={({item}) => <MoviesRow onTouch={this.changeScreen} {...item} />}
              keyExtractor={(item, index) => index.toString()}
            />
          )
        }
      </View>
    );
  }
}

export default HomeScreen