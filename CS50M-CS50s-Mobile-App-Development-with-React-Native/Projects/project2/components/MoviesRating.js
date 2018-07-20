import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class MoviesRating extends React.Component {
  barWidthHelper(ratingValue) {
    let slash = (ratingValue.match(/\//g) || []).length;
    let percent = (ratingValue.match(/%/g) || []).length;

    if (slash === 1) {
      let split = ratingValue.split('/')
      return Math.floor(parseFloat(split[0]) / parseInt(split[1]) * 100)
    } else if (percent === 1) {
      let split = ratingValue.split('%')
      return parseInt(split[0])
    } else {
      return 0
    }
  }

  render() {
    return (
      <View style={componentStyles.wrapper}>
        <Text>
          <Text>{this.props.Source} ({this.props.Value})</Text>
        </Text>
        <View style={[componentStyles.bar, {
          backgroundColor: (this.barWidthHelper(this.props.Value) >= 50) ? '#66CC33' : '#f00', 
          width:`${this.barWidthHelper(this.props.Value)}%`}]}>
        </View>
      </View>
    )
  }
}

const componentStyles = StyleSheet.create({
  wrapper: {
    paddingBottom: 5,
  },
  bar: {
    height:20,
  },
});

export default MoviesRating