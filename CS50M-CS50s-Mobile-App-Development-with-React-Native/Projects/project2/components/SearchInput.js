import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import PropTypes from 'prop-types'

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

SearchInput.propTypes = {
  onChange: PropTypes.func,
};

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