import React, {Component} from 'react'; // eslint-disable-line 

class AddList extends Component {

	handleSubmit(e) {
		e.preventDefault(); // this prevents the page from reloading -- do not delete this line!

		// Implement the rest of this function here!
		this.props.addList(this.refs.id.value);
		this.refs.id.value = '';
	}

	render() {
		return (
		<div id="addListDiv">
			<form onSubmit={this.handleSubmit.bind(this)}>
				<div id="addList">
					<label>What will be on your next list?&nbsp;
						<input type="text" ref="id" id="newID"></input>
					</label>
				</div>
				<br />
				<input type="submit" value="Create List" />
			</form>
		</div>
		);
	}
}

export default AddList;
