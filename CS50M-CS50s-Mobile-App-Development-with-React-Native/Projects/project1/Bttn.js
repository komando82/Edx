import React from 'react';
import { Button, View, TouchableOpacity, Text } from 'react-native';
import styles from './App.style.js';

class Bttn extends React.Component {
  render() {
    let buttonText

    if (this.props.isReset) {
        buttonText = 'Reset'
    } else if (this.props.isPaused) {
        buttonText = 'Start'
    } else {
        buttonText = 'Pause'
    }

    return (
      <View style={styles.buttons}>
        <Button 
          color='red'
          onPress={this.props.onClick}
          title={buttonText}
        />
      </View>
    )
  }
}

export default Bttn;
