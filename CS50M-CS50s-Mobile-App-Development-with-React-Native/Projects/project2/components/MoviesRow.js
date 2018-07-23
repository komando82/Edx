import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import style from '../screens/Screen.style'

class MoviesRow extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.Title !== nextProps.Title) {
      return true;
    }

    return false;
  }

  touchRow (data) {
    this.props.onTouch({
      title: data.Title,
      imdbID: data.imdbID
    })
  }

  render() {
    let uri = (this.props.Poster) === 'N/A' ? 'http://via.placeholder.com/100x100' : this.props.Poster

    return (
      <TouchableOpacity onPress={() => this.touchRow(this.props)}>
        <View style={[style.padding, componentStyles.wrapper]}>
          <Image source={{uri: uri}} style={componentStyles.image} />
          <View style={componentStyles.content}>
            <Text style={componentStyles.contentTitle}>{this.props.Title}</Text>
            <Text style={[style.grey, componentStyles.contentYear, ]}>{this.props.Year} ({this.props.Type})</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

MoviesRow.propTypes = {
  Poster: PropTypes.string,
  Title: PropTypes.string,
  Year: PropTypes.string,
  Type: PropTypes.string,
  imdbID: PropTypes.string,
};

const componentStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  image: {
    width:100, 
    height:100,
    alignSelf: 'center',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    width: 0,
    paddingHorizontal: 20,
  },
  contentTitle: {
    fontSize:16,
  },
  contentYear: {
    fontSize:16,
  },
});

export default MoviesRow