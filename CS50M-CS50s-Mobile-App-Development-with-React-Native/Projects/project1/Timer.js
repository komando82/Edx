import React from 'react';
import { Text } from 'react-native';
import styles from './App.style.js';

class Timer extends React.Component {
  addZeroToNumberLowerThanTen(num) {
    return (num < 10) ? `0${num}` : num
  }

  render() {
    return (
      <Text style={styles.timer}>
        {this.addZeroToNumberLowerThanTen(this.props.timeMin)}
        &nbsp;:&nbsp;
        {this.addZeroToNumberLowerThanTen(this.props.timeSec)}
      </Text>
    )
  }
}

export default Timer;
