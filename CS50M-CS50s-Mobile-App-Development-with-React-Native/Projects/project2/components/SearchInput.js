import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

import style from '../screens/Screen.style'

class SearchInput extends React.Component {
  searchInput = (text) => {
    this.props.onChange(text.toLowerCase())
  }

  render() {
    return (
      <View style={componentStyles.searchInput}>
        <TextInput 
          placeholder="Search ..."
          underlineColorAndroid='transparent'
          onChangeText={(text)=> this.searchInput(text)}
        />
      </View>
    )
  }
}

const componentStyles = StyleSheet.create({
  searchInput: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 3,
    marginHorizontal: 20,
    marginTop: 20,
  },
});

export default SearchInput