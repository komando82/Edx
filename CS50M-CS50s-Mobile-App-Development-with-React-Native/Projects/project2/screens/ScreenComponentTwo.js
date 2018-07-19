import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

class ScreenComponentTwo extends React.Component {
  static navigationOptions = {
    title: 'Dynamic Movie Title',
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 25,
          borderColor: 'orange',
        }}>
      </View>
    );
  }
}

export default ScreenComponentTwo