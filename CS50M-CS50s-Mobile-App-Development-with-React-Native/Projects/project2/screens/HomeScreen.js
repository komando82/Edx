import React from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'

import MoviesRow from '../components/MoviesRow'
import SearchInput from '../components/SearchInput'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
	  movies: [],
	  searchTerm: '',
	}

	apiUrlSearch = 'http://www.omdbapi.com/?apikey=fa45997a&s='

  searchMoviesApi = (text) => {
    return fetch(`${this.apiUrlSearch}${text}`)
      .then(response => response.json())
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

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Go to two"
          onPress={() => this.props.navigation.navigate('routeNameTwo')}
        />
        <SearchInput onChange={this.searchMoviesApi}/>
        {
          this.state.movies.length === 0 || this.state.searchTerm === ''
          ? (<Text>No results</Text>)
          : (
            <FlatList
              data={this.state.movies}
              renderItem={({item}) => <MoviesRow {...item} />}
              keyExtractor={(item, index) => index.toString()}
            />
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default HomeScreen