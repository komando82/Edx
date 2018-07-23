import React from 'react'
import { StyleSheet, Text, View, FlatList, Keyboard } from 'react-native'
import PropTypes from 'prop-types'

import moviesService from '../service/MoviesService'

import MoviesRow from '../components/MoviesRow'
import SearchInput from '../components/SearchInput'

import style from './Screen.style'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor() {
    super()

    this.state = {
      movies: [],
      searchTerm: '',
      page: 1,
      totalResults: 0
    }

    this.moviesService = new moviesService()
  }

  searchMovies = (text) => {
    if (text === '') return
    
    this.moviesService.searchMoviesService(text)
      .then(data => {
        if (data.Response === "False") {
          this.setState({
            searchTerm: text,
            movies: [],
            totalResults: 0
          })

          throw Error(data.Error)
        }

        this.setState({
          searchTerm: text,
          movies: data.Search,
          totalResults: data.totalResults,
          page: 2
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

  loadMore() {
    if ((this.state.page - 1) * 10 >= this.state.totalResults) return

    this.moviesService.searchMoviesService(this.state.searchTerm, this.state.page)
      .then(data => {
        if (data.Response === "False") {
          this.setState({
            movies: [],
            totalResults: 0,
            page: 1
          })

          throw Error(data.Error)
        }

        this.setState({
          movies: [...this.state.movies, ...data.Search],
          page: this.state.page + 1
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data: ', error)
      });
  }

  render() {
    return (
      <View style={style.container}>
        <SearchInput onChange={this.searchMovies}/>
        {
          this.state.movies.length === 0 || this.state.searchTerm === ''
          ? (<Text style={style.paddingHorizontal}>No results</Text>)
          : (
            <View style={style.container}>
              <Text style={style.paddingHorizontal}>Total Results: 
                <Text style={screenStyles.totalResults}> {this.state.totalResults}</Text>
              </Text>
              <FlatList
                data={this.state.movies}
                renderItem={({item}) => <MoviesRow onTouch={this.changeScreen} {...item} />}
                keyExtractor={(item, index) => index.toString()}
                onEndReachedThreshold={0.01}
                onEndReached={() => this.loadMore()}
                onScroll={() => Keyboard.dismiss()}
              />
            </View>
          )
        }
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

const screenStyles = StyleSheet.create({
  totalResults: {
    color: "#1e90ff",
  },
});

export default HomeScreen