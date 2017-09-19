import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import AddItem from '../AddItem.js';
import AddList from '../AddList.js';
import App from '../App';
import List from '../List.js';
import ListItem from '../ListItem.js';
import Lists from '../Lists.js';



/**************************/
/**** Component Tests *****/
/**************************/

/********* App.js *********/

/*
describe('App', function() {
	
	it('Should render the App component', function() {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.App')).length(1);
	});
  it('Should render exacctly one AddList component within the App component', function() {
		const wrapper = shallow(<App />);
		expect(wrapper.find('AddList')).length(1);
	});
  it('Should render exactly one Lists component within the App component', function() {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Lists')).length(1);
	});
  it('Should render a listsDiv within the App component', function() {
		const wrapper = shallow(<App />);
    expect(wrapper.contains(<div id="listsDiv" className="List" />));
	});
});
*/

/******* AddList.js *******/

describe('AddList', function() {
	/*
  it('Should render the addListDiv element when rendering the AddList component', function() {
		const wrapper = shallow(<AddList />);
		expect(wrapper.find('#addListDiv')).length(1);
	});
	*/
  it('Should render newID input field when AddList is rendered', function() {
		const wrapper = shallow(<AddList />);
		expect(wrapper.contains(<input type="text" id="newID" />));
	});
  /*
  it('Should render the submit button when AddList is rendered', function() {
		const wrapper = shallow(<AddList />);
		expect(wrapper.contains(<input type="submit" value="Create List" />));
	});
  */
});

/******** Lists.js ********/

describe('Lists', function() {
	/*
	it('Should only have one div in Lists class when no lists have been added', function() {
    const wrapper = shallow(<Lists lists={[]} items={[]} />);
		expect(wrapper.contains(<div id="listsDiv"  className="List" />));
	});
	*/
  it('Should have one List element when one list item passed', function() {
    const wrapper = shallow(<Lists lists={["Dogs"]} items={[]} addItem={addListHelper}/>);
		expect(wrapper.find(<List name="Dogs" />));
	});
  it('Should have two List elements when two lists items passed', function() {
    const wrapper = shallow(<Lists lists={["Dogs", "Cats"]} items={[]} addItem={addListHelper}/>);
		expect(wrapper.find('List')).length(2);
	});
});

/********* List.js ********/

describe('List', function() {
  it('One List element with no items should be rendered when one list with no itmes is passed to Lists', function() {
    const wrapper = shallow(<Lists lists={["Dogs"]} items={[]} addItem={addListHelper}/>);
		expect(wrapper.find('ListItem')).length(0);
	});
  it('Every List element should contain an AddItem component', function() {
    const wrapper = mount(<Lists lists={["Dogs"]} items={[]} addItem={addListHelper}/>);
    expect(wrapper.find('AddItem')).length(1);
  });
  it('Adding one item to a List should render the item', function() {
    const wrapper = mount(<Lists lists={["Dogs"]} items={["Lola"]} addItem={addListHelper}/>);
    expect(wrapper.contains(<strong>Lola</strong>));
	});
});

/******* AddItem.js *******/
/*
describe('AddItem', function() {
	
  it('AddItem components should have a div with a className of \'addListDiv\'', function() {
    const wrapper = shallow(<AddItem name="Dog" addItem={addItemHelper} />);
    expect(wrapper.contains(<div className="addItemDiv" />));
  });
  it('AddItem components should have an "name" input', function() {
    const wrapper = mount(<AddItem name="Dog" addItem={addItemHelper} />);
    expect(wrapper.contains(<input type="text" />));
  });
  it('AddItem components should have an "Add Value" input, and a "Submit" input', function() {
    const wrapper = shallow(<AddItem name="Dog" addItem={addItemHelper} />);
    expect(wrapper.contains(<input type="submit" value="Add Value" />));
  });
  it('AddItem components should have a "Submit" input', function() {
    const wrapper = shallow(<AddItem name="Dog" addItem={addItemHelper} />);
    expect(wrapper.contains(<input type="submit" value="Submit" />));
  });
});
*/

/****** ListItem.js *******/
/*
describe('ListItem', function() {
  it('A ListItem with only a "name" attribute should render the name within an HTML strong element', function() {
    var array = [];
    array["name"] = "Sprinkles";
    const wrapper = shallow(<ListItem item={array} />);
    expect(wrapper.contains(<strong>Sprinkles</strong>));
  });
  
  it('A ListItem with attributes other than "name" should render the attributes as HTML list items', function() {
    var array = [];
    array["name"] = "Lola";
    array["breed"] = "Golden Retriever";
    array["age"] = "2";
    const wrapper = shallow(<ListItem item={array} />);
    expect(wrapper.contains(<li><i>breed:</i>Golden Retriever</li>));
    expect(wrapper.contains(<li><i>age:</i>2</li>));
  });
  
});
*/


// CHRIS TESTS!
/***********************************/

describe('Interaction tests', () => {

	it('After entering name and clicking button in AddList, Lists should have one List element', () => {
		var wrapper = mount(<App />);
		var addList = wrapper.find('AddList');
		addList.find('#newID').get(0).value = 'DOGS';
		addList.find('form').simulate('submit');
		expect(wrapper.find('Lists').find('List'), 'There should be one List component within Lists').length(1);		

		var list = wrapper.find('Lists').find('List');
		// make sure they don't change the name of the props!
		expect(list.props().name == 'DOGS', "'name' prop in List component is incorrect").equals(true);

	    });

	it('After adding one List, should be possible to add another', () => {
		var wrapper = mount(<App />);
		var addList = wrapper.find('AddList');
		addList.find('#newID').get(0).value = 'DOGS';
		addList.find('form').simulate('submit');

		addList = wrapper.find('AddList');
		addList.find('#newID').get(0).value = 'CATS';
		addList.find('form').simulate('submit');

		
		expect(wrapper.find('Lists').find('List'), 'There should be two List components within Lists').length(2);		

		var lists = wrapper.find('Lists').find('List');
		//console.log(lists.nodes[1].props);
		// make sure they don't change the name of the props!
		expect(lists.nodes[1].props.name == 'CATS', "'name' prop in second List component is incorrect").equals(true);

	    });

	it('Should be possible to add item name to List using form', () => {
		var wrapper = mount(<App />);
		var addList = wrapper.find('AddList');
		addList.find('#newID').get(0).value = 'DOGS';
		addList.find('form').simulate('submit');
		//expect(wrapper.find('Lists').find('List')).length(1);		

		/*
		  it would of course be nice to create the List without the App but, uh.....
		 */

		var list = wrapper.find('Lists').find('List'); //mount(<List name='test' items={[]} addItem={wrapper.instance().handleAddItem} />);
		//var list = mount(<List name='test' items={[]} addItem={wrapper.handleAddItem} />);
		/*
		  okay, we have a List
		  get its AddItem component
		  get that component's form
		  submit some stuff
		  check that the List now has a ListItem
		 */
		var addItem = list.find('AddItem');
		addItem.find("input[type='text']").get(0).value = 'Snoopy';
		addItem.find('form').simulate('submit');
		
		list = wrapper.find('Lists').find('List');
		expect(list.find('ListItem'), 'There should be one ListItem component in List').length(1);
		
		expect(list.find('ListItem').props().item.name == 'Snoopy', "'item.name' prop of ListItem is incorrect").equals(true);

	    });

	it('Should be possible to add more than one item name to List using form', () => {
		var wrapper = mount(<App />);
		var addList = wrapper.find('AddList');
		addList.find('#newID').get(0).value = 'DOGS';
		addList.find('form').simulate('submit');

		var list = wrapper.find('Lists').find('List'); 

		var addItem = list.find('AddItem');
		addItem.find("input[type='text']").get(0).value = 'Snoopy';
		addItem.find('form').simulate('submit');
		
		list = wrapper.find('Lists').find('List'); 
		addItem = list.find('AddItem');
		addItem.find("input[type='text']").get(0).value = 'Lola';
		addItem.find('form').simulate('submit');


		list = wrapper.find('Lists').find('List');
		expect(list.find('ListItem'), 'There should be two ListItem components in List').length(2);
		var listItems = list.find('ListItem');
		//console.log(listItems.nodes[1].props);
		var name = listItems.nodes[1].props.item.name;
		expect(name == 'Lola', "'item.name' prop in second ListItem is incorrect").equals(true);
		//expect(list.find('ListItem').get(1).props().item.name == 'Lola').equals(true);
		//expect(list.find('ListItem').nodes[1].props().item.name == 'Snoopy').equals(true);

	    });

	it('Should be possible to change list item color from black to gray by clicking on text once', () => {
		var wrapper = mount(<App />);
		var addList = wrapper.find('AddList');
		addList.find('#newID').get(0).value = 'DOGS';
		addList.find('form').simulate('submit');

		var list = wrapper.find('Lists').find('List'); 

		var addItem = list.find('AddItem');
		addItem.find("input[type='text']").get(0).value = 'Snoopy';
		addItem.find('form').simulate('submit');
		
		var listItem = wrapper.find('Lists').find('List').find('ListItem');
	        listItem.find('span').simulate('click');

		listItem = wrapper.find('Lists').find('List').find('ListItem');
		var span = listItem.find('span');
		//console.log(span);
		expect(span.prop('style').color == 'gray', "'span' element in ListItem should have color attribute equal to 'gray'").equals(true);
	    });

	it('Should be possible to change list item color from gray back to black by clicking on text twice', () => {
		var wrapper = mount(<App />);
		var addList = wrapper.find('AddList');
		addList.find('#newID').get(0).value = 'DOGS';
		addList.find('form').simulate('submit');

		var list = wrapper.find('Lists').find('List'); 

		var addItem = list.find('AddItem');
		addItem.find("input[type='text']").get(0).value = 'Snoopy';
		addItem.find('form').simulate('submit');
		
		var listItem = wrapper.find('Lists').find('List').find('ListItem');
	        listItem.find('span').simulate('click');
		
		listItem = wrapper.find('Lists').find('List').find('ListItem');
	        listItem.find('span').simulate('click');

		listItem = wrapper.find('Lists').find('List').find('ListItem');
		var span = listItem.find('span');
		//console.log(span);
		expect(span.prop('style').color == 'black', "'span' element in ListItem should have color attribute equal to 'black'").equals(true);
	    });

	/*
	it('Should be possible to add item values to List using form', () => {
		var wrapper = mount(<App />);
		var addList = wrapper.find('AddList');
		addList.find('#newID').get(0).value = 'DOGS';
		addList.find('form').simulate('submit');
		var list = wrapper.find('Lists').find('List'); 
		var addItem = list.find('AddItem');
		// enter the name
		addItem.find("input[type='text']").get(0).value = 'Snoopy';
		// click Add Value button
		var button = addItem.find("button");
		//console.log(button);
		button.simulate('click');
		// enter the key and value
		//var div = addItem.find('.newCat');
		//console.log(div);
		//console.log(div.find("input[type='text']"));
		//console.log(div.find(".addItemText"))
		//div.find(".addItemText").get(0).value = 'breed';
		//div.find(".addItemText").get(1).value = 'beagle';
		//console.log(addItem.find('input').length);


		var div = addItem.find('#addDOGS');
		console.log(div.find('input').length);
		

		//addItem.find("input").get(0).value = 'breed';
		//addItem.find("input").get(1).value = 'beagle';

		
		// submit the form
		addItem.find('form').simulate('submit');

		var listItem = wrapper.find('Lists').find('List').find('ListItem');
		// see that it contains the entered data
		console.log(listItem.props().item);

	    });
	*/
    });



/**************************/
/**** Helper Functions ****/
/**************************/

var addListHelper = function() {
  console.log('Adding list!');
}

var addItemHelper = function() {
  console.log('Adding item!');
}
