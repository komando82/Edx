import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import FontChooserTest from '../FontChooserTest';



/*
FONT SIZE
initially hidden
initially black
appears when text is clicked
hidden when text is clicked twice
has correct initial value
turns red when min
turns red when max
turns black when min then increase
turns black when max then decrease
 */

it('font size should initially be hidden', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='false' text='hello' />);
	var hidden = wrapper.find('#fontSizeSpan').prop('hidden');
	//expect(wrapper.find('#fontSizeSpan').prop('hidden')).to.equal(true);
	expect(hidden == true || hidden == 'true').to.equal(true);
});

it('font size should initially be black when value between min and max', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='false' text='hello' />);
	expect(wrapper.find('#fontSizeSpan').prop('style').color).to.equal('black');
});

// INITIALLY RED WHEN equal to min or max?

// what if size < min or size > max or min < 0???


it('font size should match initial value', () => {
	const wrapper = mount(<FontChooserTest min='2' size='8' max='10' bold='false' text='hello' />);
	expect(wrapper.find('#fontSizeSpan').html().replace(/<[\s\S]*?>/g, '').trim()).to.equal('8');
});

it('font size should appear when text is clicked', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='false' text='hello' />);
	wrapper.find('#textSpan').simulate('click'); 
	var hidden = wrapper.find('#fontSizeSpan').prop('hidden');
	//expect(wrapper.find('#fontSizeSpan').prop('hidden')).to.equal(false);
	expect(hidden == false || hidden == 'false').to.equal(true);
});

it('font size should disappear when text is clicked twice', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='false' text='hello' />);
	wrapper.find('#textSpan').simulate('click'); 
	wrapper.find('#textSpan').simulate('click'); 
	var hidden = wrapper.find('#fontSizeSpan').prop('hidden');
	//expect(wrapper.find('#fontSizeSpan').prop('hidden')).to.equal(true);
	expect(hidden == true || hidden == 'true').to.equal(true);
});

it('font size should turn red when value reaches max', () => {
	const wrapper = mount(<FontChooserTest min='2' size='9' max='10' bold='false' text='hello' />);
	wrapper.find('#increaseButton').simulate('click'); // now it's 10
	expect(wrapper.find('#fontSizeSpan').prop('style').color).to.equal('red');
});

it('font size should stay red when attempting to exceed max', () => {
	const wrapper = mount(<FontChooserTest min='2' size='9' max='10' bold='false' text='hello' />);
	wrapper.find('#increaseButton').simulate('click'); // now it's 10
	wrapper.find('#increaseButton').simulate('click'); // still 10
	expect(wrapper.find('#fontSizeSpan').prop('style').color).to.equal('red');
});

it('font size should turn black when value reaches max then decremented', () => {
	const wrapper = mount(<FontChooserTest min='2' size='9' max='10' bold='false' text='hello' />);
	wrapper.find('#increaseButton').simulate('click'); // now it's 10
	wrapper.find('#decreaseButton').simulate('click'); // now it's 9
	expect(wrapper.find('#fontSizeSpan').prop('style').color).to.equal('black');
});

it('font size should turn red when value reaches min', () => {
	const wrapper = mount(<FontChooserTest min='3' size='4' max='10' bold='false' text='hello' />);
	wrapper.find('#decreaseButton').simulate('click'); // now it's 3
	expect(wrapper.find('#fontSizeSpan').prop('style').color).to.equal('red');
});

it('font size should stay red when attempting to exceed min', () => {
	const wrapper = mount(<FontChooserTest min='3' size='4' max='10' bold='false' text='hello' />);
	wrapper.find('#decreaseButton').simulate('click'); // now it's 3
	wrapper.find('#decreaseButton').simulate('click'); // still 3
	expect(wrapper.find('#fontSizeSpan').prop('style').color).to.equal('red');
});

it('font size value should revert to default when double-clicked', () => {
	const wrapper = mount(<FontChooserTest min='3' size='6' max='10' bold='false' text='hello' />);
	wrapper.find('#decreaseButton').simulate('click'); // now it's 7
	wrapper.find('#fontSizeSpan').simulate('doubleclick'); // should go back to 6
	expect(wrapper.find('#fontSizeSpan').html().replace(/<[\s\S]*?>/g, '').trim()).to.equal('6');
});

it('text font size should revert to default when double-clicked', () => {
	const wrapper = mount(<FontChooserTest min='3' size='6' max='10' bold='false' text='hello' />);
	wrapper.find('#decreaseButton').simulate('click'); // now it's 7
	wrapper.find('#fontSizeSpan').simulate('doubleclick'); // should go back to 6
	expect(wrapper.find('#textSpan').prop('style').fontSize).to.equal(6);
});



/*
DECREASE BUTTON
initially hidden
appears when text is clicked
hidden when text is clicked twice
reduces fontSize value when clicked
reduces text size when clicked
does not exceed min
 */
it('decrease button should initially be hidden', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='false' text='hello' />);
	var hidden = wrapper.find('#decreaseButton').prop('hidden');
	//expect(wrapper.find('#decreaseButton').prop('hidden')).to.equal(true);
	expect(hidden == true || hidden == 'true').to.equal(true);
});

it('decrease button should appear when text is clicked', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='false' text='hello' />);
	wrapper.find('#textSpan').simulate('click'); 
	var hidden = wrapper.find('#decreaseButton').prop('hidden');
	//expect(wrapper.find('#decreaseButton').prop('hidden')).to.equal(false);
	expect(hidden == false || hidden == 'false').to.equal(true);
});

it('decrease button should disappear when text is clicked twice', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='false' text='hello' />);
	wrapper.find('#textSpan').simulate('click'); 
	wrapper.find('#textSpan').simulate('click'); 
	var hidden = wrapper.find('#decreaseButton').prop('hidden');
	//expect(wrapper.find('#decreaseButton').prop('hidden')).to.equal(true);
	expect(hidden == true || hidden == 'true').to.equal(true);
});

it('decrease button should decrement displayed font size when clicked', () => {
	const wrapper = mount(<FontChooserTest min='2' size='8' max='10' bold='false' text='hello' />);
	wrapper.find('#decreaseButton').simulate('click');
	expect(wrapper.find('#fontSizeSpan').html().replace(/<[\s\S]*?>/g, '').trim()).to.equal('7');
});

it('decrease button should decrement font size of text when clicked', () => {
	const wrapper = mount(<FontChooserTest min='2' size='8' max='10' bold='false' text='hello' />);
	wrapper.find('#decreaseButton').simulate('click'); // now it's 7
	expect(wrapper.find('#textSpan').prop('style').fontSize).to.equal(7);
});

it('decrease button should not exceed min when clicked', () => {
	const wrapper = mount(<FontChooserTest min='3' size='4' max='10' bold='false' text='hello' />);
	wrapper.find('#decreaseButton').simulate('click'); // now it's 3
	wrapper.find('#decreaseButton').simulate('click'); // should still be 3
	expect(wrapper.find('#fontSizeSpan').html().replace(/<[\s\S]*?>/g, '').trim()).to.equal('3');
});

/*
INCREMENT BUTTON
initially hidden
appears when text is clicked
hidden when text is clicked twice
increases fontSize value when clicked
increases text size when clicked
does not exceed max
 */
it('increase button should initially be hidden', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='false' text='hello' />);
	var hidden = wrapper.find('#increaseButton').prop('hidden');
	//expect(wrapper.find('#increaseButton').prop('hidden')).to.equal(true);
	expect(hidden == true || hidden == 'true').to.equal(true);
});

it('increase button should appear when text is clicked', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='false' text='hello' />);
	wrapper.find('#textSpan').simulate('click'); 
	var hidden = wrapper.find('#increaseButton').prop('hidden');
	//expect(wrapper.find('#increaseButton').prop('hidden')).to.equal(false);
	expect(hidden == false || hidden == 'false').to.equal(true);
});

it('increase button should disappear when text is clicked twice', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='false' text='hello' />);
	wrapper.find('#textSpan').simulate('click'); 
	wrapper.find('#textSpan').simulate('click'); 
	var hidden = wrapper.find('#increaseButton').prop('hidden');
	//expect(wrapper.find('#increaseButton').prop('hidden')).to.equal(true);
	expect(hidden == true || hidden == 'true').to.equal(true);
});

it('increase button should increment displayed font size when clicked', () => {
	const wrapper = mount(<FontChooserTest min='2' size='4' max='10' bold='false' text='hello' />);
	wrapper.find('#increaseButton').simulate('click');
	expect(wrapper.find('#fontSizeSpan').html().replace(/<[\s\S]*?>/g, '').trim()).to.equal('5');
});

it('increase button should increment font size of text when clicked', () => {
	const wrapper = mount(<FontChooserTest min='2' size='4' max='10' bold='false' text='hello' />);
	wrapper.find('#increaseButton').simulate('click'); // now it's 5
	expect(wrapper.find('#textSpan').prop('style').fontSize).to.equal(5);
});

it('increase button should not exceed max when clicked', () => {
	const wrapper = mount(<FontChooserTest min='3' size='9' max='10' bold='false' text='hello' />);
	wrapper.find('#increaseButton').simulate('click'); // now it's 10
	wrapper.find('#increaseButton').simulate('click'); // should still be 10
	expect(wrapper.find('#fontSizeSpan').html().replace(/<[\s\S]*?>/g, '').trim()).to.equal('10');
});



/*
CHECKBOX
initially hidden
initially checked or unchecked
appears when text is clicked
hidden when text is clicked twice
changes text to bold when selected
changes text to normal when unselected
 */
it('checkbox should initially be hidden', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='false' text='hello' />);
	var hidden = wrapper.find('#boldCheckbox').prop('hidden');
	//expect(wrapper.find('#boldCheckbox').prop('hidden')).to.equal(true);
	expect(hidden == true || hidden == 'true').to.equal(true);
    });

it('checkbox should appear when text is clicked', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='false' text='hello' />);
	wrapper.find('#textSpan').simulate('click'); 
	var hidden = wrapper.find('#boldCheckbox').prop('hidden');
	//expect(wrapper.find('#boldCheckbox').prop('hidden')).to.equal(false);
	expect(hidden == false || hidden == 'false').to.equal(true);
    });

it('checkbox should disappear when text is clicked twice', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='false' text='hello' />);
	wrapper.find('#textSpan').simulate('click'); 
	wrapper.find('#textSpan').simulate('click'); 
	var hidden = wrapper.find('#boldCheckbox').prop('hidden');
	//expect(wrapper.find('#boldCheckbox').prop('hidden')).to.equal(true);
	expect(hidden == true || hidden == 'true').to.equal(true);
    });

it('checkbox should initially be checked when bold is true', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='true' text='hello' />);
	var checked = wrapper.find('#boldCheckbox').prop('checked');
	//expect(wrapper.find('#boldCheckbox').prop('checked')).to.equal(true);
	expect(checked == true || checked == 'true').to.equal(true);
    });

it('checkbox should initially be unchecked when bold is false', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='false' text='hello' />);
	var checked = wrapper.find('#boldCheckbox').prop('checked');
	//expect(wrapper.find('#boldCheckbox').prop('checked')).to.equal(false);
	expect(checked == false || checked == 'false').to.equal(true);
    });

it('text should be set to bold when checkbox is checked', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='false' text='hello' />);
	wrapper.find("#boldCheckbox").simulate('change');
	expect(wrapper.find('#textSpan').prop('style').fontWeight).to.equal('bold');
    });

it('text should be set to normal when checkbox is checked then unchecked', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='false' text='hello' />);
	wrapper.find("#boldCheckbox").simulate('change');
	wrapper.find("#boldCheckbox").simulate('change');
	expect(wrapper.find('#textSpan').prop('style').fontWeight).to.equal('normal');
    });



/*
TEXT
has correct value from props
has correct initial font size
is initially bold (or not bold)
*/

it('text should have correct value from props', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='false' text='helloworld!' />);
	expect(wrapper.find('#textSpan').html().replace(/<[\s\S]*?>/g, '').trim()).to.equal('helloworld!');
    });

it('text should have correct initial font size', () => {
	const wrapper = mount(<FontChooserTest min='2' size='18' max='30' bold='false' text='hello' />);
	expect(wrapper.find('#textSpan').prop('style').fontSize).to.equal(18);
    });

it('text should initially be bold when specified', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='true' text='hello' />);
	expect(wrapper.find('#textSpan').prop('style').fontWeight).to.equal('bold');
    });

it('text should initially not be bold when specified', () => {
	const wrapper = mount(<FontChooserTest min='2' size='6' max='10' bold='false' text='hello' />);
	expect(wrapper.find('#textSpan').prop('style').fontWeight).to.equal('normal');
    });


