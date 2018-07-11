import React from 'react';

class Heading extends React.Component {
    render() {
        const title = !this.props.title ? 'Work Timer' : 'Break Timer'

        return (
            <h1>{title.toUpperCase()}</h1>
        )
    }
}

export default Heading;
