import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './App.style.js';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: props.value.toString()};
  }

  changeInput = (num) => {
    let breakTime = (this.props.breakTime) ? this.props.breakTime : false
    let inpValue = parseInt(num)
    inpValue = (isNaN(inpValue)) ? 0 : inpValue

    this.setState({text: inpValue.toString()});
    
    this.props.onChange({
      value: inpValue,
      breakTime: breakTime
    })
  }

  render() {
    return (
      <View style={[styles.inputStyles, styles.rowItemWidth]}>
        <TextInput 
          keyboardType = 'numeric'
          // onChangeText={(text)=> this.changeInput(text)}
          onChangeText={(text)=> this.changeInput(text)}
          // onChangeText={(text) => this.setState({text})}
          value={this.state.text} 
        />
      </View>
    )
  }
}

export default Input;
