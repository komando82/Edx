import React, {Component} from 'react'; // eslint-disable-line 
import ListItem from './ListItem.js'; // eslint-disable-line 
import AddItem from './AddItem.js'; // eslint-disable-line 
const uuidv4 = require('uuid'); // eslint-disable-line 

class List extends Component {

	render() {
		var name = this.props.name;
		var items = this.props.items;

		if (items) {
			return (
				<div id={name} key={uuidv4()}>
					<h3>{name} List</h3>
					<ul>
						{items.map(function(item) {
							return (
								<li key={uuidv4()}><ListItem item={item} key={uuidv4()} /></li>
							);
						})}
					</ul>
					<AddItem idName={name} addItem={this.props.addItem.bind(this)} />
				</div>
			);
		}

		return (
			<div id={name} key={uuidv4()}>
				<h3>{name} List</h3>
				<AddItem idName={name} addItem={this.props.addItem.bind(this)} />
			</div>
		);

	}
}

export default List;
