import React from 'react';

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
            <input type={this.props.type} onChange={this.changeInput} value={this.props.value} />
        )
    }
}

export default Input;
