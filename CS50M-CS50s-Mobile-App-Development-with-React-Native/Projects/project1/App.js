import React from 'react';
import { Text, View } from 'react-native';

import {vibrate} from './utils'

import Bttn from './Bttn.js'
import Heading from './Heading.js'
import Input from './Input.js'
import Timer from './Timer.js'

import styles from './App.style.js';

export default class App extends React.Component {
  constructor() {
    super()

    this.workMin = 2
    this.workSec = 8

    this.breakMin = 1
    this.breakSec = 3

    this.intervalTime = 1000

    this.state = {
      timeMin: this.workMin,
      timeSec: this.workSec,
      workInpMin: this.workMin,
      breakInpMin: this.breakMin,
      isPaused: false,
      breakTime: false,
    }
  }

  componentDidMount = () => {
    this.int = setInterval(() => this.countDown(), this.intervalTime)
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (this.state.isPaused !== prevState.isPaused) {
      if (this.state.isPaused) {
        clearInterval(this.int)
      } else {
        this.int = setInterval(() => this.countDown(), this.intervalTime)
      }
    }
  }

  countDown() {
    // console.log('time countDown')
    this.setState({ timeSec: this.state.timeSec - 1 })

    if (this.state.timeSec < 0) {
      this.setState({ 
        timeMin: this.state.timeMin - 1,
        timeSec: 59
      })
    }

    if (this.state.timeMin < 0) {
      let breakTime = !this.state.breakTime

      this.setState({ 
        timeMin: (breakTime) ? this.breakMin : this.workMin,
        timeSec: (breakTime) ? this.breakSec : this.workSec,
        breakTime: breakTime,
      })
    }
  }

  pauseCountDown = () => {
    if (this.state.isPaused) {
      // console.log("start")
      this.setState({ isPaused: false })
    } else {
      // console.log("pause")
      this.setState({ isPaused: true })
    }

    vibrate()
  }

  resetCountDown = () => {
    // console.log("reset")
    this.resetCounterHelper()
    vibrate()
  }

  timeChangeMin = (data) => {
    // console.log('change time')
    let inpValue = data.value
    inpValue = (inpValue >= 0) ? inpValue : 0

    if (!data.breakTime) {
      this.workMin = inpValue
      this.setState({ workInpMin: inpValue })
    } else {
      this.breakMin = inpValue
      this.setState({ breakInpMin: inpValue })
    }

    this.resetCounterHelper()
  }

  timeChangeSec = (data) => {
    let inpValue = data.value
    let workOrBreak = (!data.breakTime) ? 'work' : 'break'

    if (inpValue >= 60) {
      let inpValDivide = Math.floor(inpValue / 60)

      this[`${workOrBreak}Sec`] = inpValue % 60
      this[`${workOrBreak}Min`] += Math.floor(inpValue / 60)

      if (!data.breakTime) {
        let workM = this.state.workInpMin
        this.setState({ workInpMin: workM + Math.floor(inpValue / 60) })
      } else {
        let breakM = this.state.breakInpMin
        this.setState({ breakInpMin: breakM + Math.floor(inpValue / 60) })
      }
    } else {
      this[`${workOrBreak}Sec`] = inpValue
    }

    this.resetCounterHelper()
  }

  resetCounterHelper = () => {
    this.setState({ 
      isPaused: true,
      timeMin: this.workMin,
      timeSec: this.workSec,
      breakTime: false 
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Heading title={this.state.breakTime} />

        <Timer 
          timeMin={this.state.timeMin}
          timeSec={this.state.timeSec}
        />

        <View style={styles.buttonsWrapper}>
          <Bttn 
            isReset={false}
            isPaused={this.state.isPaused}
            onClick={this.pauseCountDown}
          />
          <Bttn 
            isReset={true}
            isPaused={this.state.isPaused}
            onClick={this.resetCountDown}
          />
        </View>

        <View style={styles.inputsWrapper}>
          <Text style={styles.rowItemWidth}>Work Time: </Text>
          <View style={styles.inputsText}>
            <Text>Mins: </Text>
            <Input 
              value={this.state.workInpMin}
              onChange={this.timeChangeMin}
            />
          </View>
          <View style={styles.inputsText}>
            <Text>Secs: </Text>
            <Input 
              value={this.workSec}
              onChange={this.timeChangeSec}
            />
          </View>
        </View>

        <View style={styles.inputsWrapper}>
          <Text style={styles.rowItemWidth}>Break Time: </Text>
          <View style={styles.inputsText}>
            <Text>Mins: </Text>
            <Input 
              value={this.state.breakInpMin}
              breakTime={true}
              onChange={this.timeChangeMin}
            />
          </View>
          <View style={styles.inputsText}>
            <Text>Secs: </Text>
            <Input 
              value={this.breakSec}
              breakTime={true}
              onChange={this.timeChangeSec}
            />
          </View>
        </View>
      </View>
    );
  }
}
