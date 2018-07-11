import React from 'react';
import { Text } from 'react-native';
import styles from './App.style.js';

class Heading extends React.Component {
  render() {
    const title = !this.props.title ? 'Work Timer' : 'Break Timer'

    return (
      <Text style={styles.heading}>{title.toUpperCase()}</Text>
    )
  }
}

export default Heading;
