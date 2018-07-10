import React from 'react';
import { Text } from 'react-native';

class Heading extends React.Component {
  render() {
    const title = !this.props.title ? 'Work Timer' : 'Break Timer'

    return (
      <Text>{title.toUpperCase()}</Text>
    )
  }
}

export default Heading;
