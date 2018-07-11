import React from 'react';

class Button extends React.Component {
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
            <button onClick={this.props.onClick}>{buttonText}</button>
        )
    }
}

export default Button;
