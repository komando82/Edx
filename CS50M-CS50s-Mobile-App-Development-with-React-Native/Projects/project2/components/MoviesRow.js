import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

class MoviesRow extends React.Component {
  render() {
    return (
      <View style={componentStyles.wrapper}>
        <Image source={{uri: this.props.Poster}} style={componentStyles.image} />
        <View style={componentStyles.content}>
          <Text style={componentStyles.contentTitle}>{this.props.Title}</Text>
          <Text style={componentStyles.contentYear}>{this.props.Year} ({this.props.Type})</Text>
        </View>
      </View>
    )
  }
}

const componentStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  image: {
    width:100, 
    height:100
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
    color:'#aaa'
  },
});

export default MoviesRow