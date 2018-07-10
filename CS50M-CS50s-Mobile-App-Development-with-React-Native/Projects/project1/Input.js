import React from 'react';
import { TextInput } from 'react-native';

class Input extends React.Component {
  changeInput = (e) => {
    let breakTime = (this.props.breakTime) ? this.props.breakTime : false
    let inpValue = parseInt(e.target.value)
    inpValue = (isNaN(inpValue)) ? 0 : inpValue
    
    this.props.onChange({
      value: inpValue,
      breakTime: breakTime
    })
  }

  render() {
    return (
      <TextInput 
        onChange={this.changeInput} 
        value={this.props.value.toString()} 
      />
    )
  }

  // render() {
  //   return (
  //     <TextInput
  //      inlineImageLeft='search_icon'
  //     />
  //   )
  // }
}

export default Input;
