import React from 'react';
import Button from './Button.js'
import Heading from './Heading.js'
import Input from './Input.js'
import Timer from './Timer.js'

class App extends React.Component {
    constructor() {
        super()

        this.workMin = 2
        this.workSec = 8

        this.breakMin = 1
        this.breakSec = 3

        this.intervalTime = 100

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
    }

    resetCountDown = () => {
        // console.log("reset")
        this.resetCounterHelper()
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
            let inpValModulo = Math.floor(inpValue / 60)

            this[`${workOrBreak}Sec`] = inpValue % 60
            this[`${workOrBreak}Min`] += Math.floor(inpValue / 60)

            if (!data.breakTime) {
                let workM = this.state.workInpMin
                console.log(this.state.workInpMin)
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
            <div>
                <Heading title={this.state.breakTime} />

                <Button 
                    isReset={false}
                    isPaused={this.state.isPaused}
                    onClick={this.pauseCountDown}
                />
                <Button 
                    isReset={true}
                    isPaused={this.state.isPaused}
                    onClick={this.resetCountDown}
                />

                <Timer 
                    timeMin={this.state.timeMin}
                    timeSec={this.state.timeSec}
                />

                <div>
                    Work Time: 
                    Mins: <Input 
                        type="text"
                        value={this.state.workInpMin}
                        onChange={this.timeChangeMin}
                    />
                    Secs: <Input 
                        type="text"
                        value={this.workSec}
                        onChange={this.timeChangeSec}
                    />
                </div>
                <div>
                    Break Time: 
                    Mins: <Input 
                        type="text"
                        value={this.state.breakInpMin}
                        breakTime={true}
                        onChange={this.timeChangeMin}
                    />
                    Secs: <Input 
                        type="text"
                        value={this.breakSec}
                        breakTime={true}
                        onChange={this.timeChangeSec}
                    />
                </div>
            </div>
        )
    }
}

export default App;
