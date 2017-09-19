import React, {Component} from 'react'; // eslint-disable-line 

class ListItem extends Component {

	constructor(props) {
		super(props);
		this.state = {color: 'black'};
	}

	handleClick() {
		// Implement this function!
		if (this.state.color === 'black') {
			this.setState({color: 'gray'});
		}
		else {
			this.setState({color: 'black'});
		}
	}

	render() {
		var item = this.props.item;
		var name = item.name;

		return (
			<span onClick={this.handleClick.bind(this)} style={{color: this.state.color}}>
				<strong>{name}</strong>
			</span>
		);

	}

}
export default ListItem;

