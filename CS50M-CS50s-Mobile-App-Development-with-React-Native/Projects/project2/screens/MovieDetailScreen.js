import React from 'react'
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native'
import PropTypes from 'prop-types'

import moviesService from '../service/MoviesService'

import MoviesRating from '../components/MoviesRating'

import style from './Screen.style'

class MovieDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { title: navigation.getParam('title') }
  }

  constructor(props) {
    super(props)

    this.state = {
      movie: {}
    }

    this.moviesService = new moviesService()

    if (this.props.navigation.getParam('imdbID')) {
      this.titleMoviesApi(this.props.navigation.getParam('imdbID'))
    }
  }

  titleMoviesApi = (title) => {
    if (title === '') return

    this.moviesService.getMovieByImdbIDService(title)
      .then(data => {
        if (data.Response === "False") {
          throw Error(data.Error)
        }

        this.setState({ movie: data })
        this.setImageWidthAndHeight(data.Poster)
      })
      .catch(error => {
        console.log('Error fetching and parsing data: ', error)
      });
  }

  setImageWidthAndHeight(image) {
    Image.getSize(image, (width, height) => {
      if (this.props.width && !this.props.height) {
        this.setState({width: this.props.width, height: height * (this.props.width / width)})
      } else if (!this.props.width && this.props.height) {
        this.setState({width: width * (this.props.height / height), height: this.props.height})
      } else {
        this.setState({width: width, height: height})
      }
    }, function() {
      console.log('No Image')
    })
  }

  render() {
    let ratings = this.state.movie.Ratings || []

    return (
      <View style={style.container}>
        <ScrollView contentContainerStyle={[screenStyles.scrollView, style.padding]}>
          <View style={[screenStyles.imageWrapper, screenStyles.pBottom]}>
            <Image 
              source={{uri: this.state.movie.Poster}} 
              style={{height: this.state.height, width: this.state.width}}
              resizeMode={'contain'} 
            />
          </View>
          <Text style={screenStyles.pBottom}>
            <Text style={screenStyles.title}>{this.state.movie.Title} </Text>
            <Text style={style.grey}>
              {
                this.state.movie.Year
                ? `(${this.state.movie.Year})`
                : null
              }
            </Text>
          </Text>
          <Text style={screenStyles.pBottom}>
            {
              this.state.movie.Rated && this.state.movie.Runtime 
              ? `${this.state.movie.Rated}, ${this.state.movie.Runtime}` 
              : null
            }
          </Text>
          <Text style={[screenStyles.pBottom, screenStyles.plot]}>{this.state.movie.Plot}</Text>
          <View style={screenStyles.pBottom}>
            {
              ratings.map((rating, index) => {
                return <MoviesRating key={index} {...rating} />;
              })
            }
          </View>
          <Button
            title="Go back to Home"
            onPress={() => this.props.navigation.navigate('routeHome')}
          />
        </ScrollView>
      </View>
    );
  }
}

MovieDetailScreen.propTypes = {
  navigation: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

const screenStyles = StyleSheet.create({
  scrollView: {
    width: "100%",
  },
  imageWrapper: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  plot: {
    fontStyle: 'italic'
  },
  pBottom: {
    paddingBottom: 20,
  }
});

export default MovieDetailScreen