import React from 'react';
import { Button } from 'react-native';

class Btn extends React.Component {
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
      <Button 
        onPress={this.props.onClick}
        title={buttonText}
      />
    )
  }
}

export default Btn;
