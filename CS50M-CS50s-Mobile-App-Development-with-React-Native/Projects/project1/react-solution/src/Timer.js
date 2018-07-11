import React from 'react';

class Timer extends React.Component {
    addZeroToNumberLowerThanTen(num) {
        return (num < 10) ? `0${num}` : num
    }

    render() {
        return (
            <div>
                <span>
                    {this.addZeroToNumberLowerThanTen(this.props.timeMin)}
                    &nbsp;:&nbsp;
                    {this.addZeroToNumberLowerThanTen(this.props.timeSec)}
                </span>
            </div>
        )
    }
}

export default Timer;
