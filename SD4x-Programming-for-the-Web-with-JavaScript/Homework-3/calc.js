/*
 * Implement all your JavaScript in this file!
 */

var display = $('#display'); // eslint-disable-line 

var resetDisplay = false;
var opClicked = false;
var eqClicked = false;

var op = '';
var previousNum = 0;
var currentNum = 0;

/**
 * This function collects the current number in display
 * 
 * @return value on the display
 */
function checkDisplayValue()
{
    return display.val();
}

/**
 * This function should calculate result of operation
 * 
 * @return the result of mathematical operation of previous and current number
 */
function result()
{
    if (previousNum === 0)
    {
        return currentNum;
    }

    var res = '';

    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    switch(op)
    {
    case '+':
        res = previousNum + currentNum;
        break;
    case '-':
        res = previousNum - currentNum;
        break;
    case '*':
        res = previousNum * currentNum;
        break;
    case '/':
        if (currentNum === 0)
        {
            res = 'Infinity';
        }
        else
        {
            res = previousNum / currentNum;
        }
        break;
    }

    return res;
}


$('#button0, #button1, #button2, #button3, #button4, #button5, #button6, #button7, #button8, #button9').click(function() { // eslint-disable-line 
    var clickedNum = $(this).val(); // eslint-disable-line 

    opClicked = false;
    eqClicked = false;

    if(eqClicked)
    {
        previousNum = 0;
    }

    if(resetDisplay)
    {
        display.val(clickedNum);
        resetDisplay = false;
    }
    else
    {
        display.val(checkDisplayValue() + clickedNum);
    }
});

$('#addButton, #subtractButton, #multiplyButton, #divideButton').click(function() { // eslint-disable-line 
    var sign = $(this).text(); // eslint-disable-line 

    if(sign !== '+' && sign !== '-' && sign !== '*')
    {
        sign = '/';
    }

    if(eqClicked)
    {
        previousNum = 0;
    }

    currentNum = checkDisplayValue();

    if (opClicked)
    {
        previousNum = currentNum;
    }
    else
    {
        previousNum = result();
    }

    opClicked = true;
    resetDisplay = true;
    eqClicked = false;

    op = sign;
    display.val(previousNum);
});

$('#equalsButton').click(function() { // eslint-disable-line 
    if(opClicked)
    {
        return;
    }

    if(eqClicked)
    {
        previousNum = result();
        display.val(result());
    }
    else
    {
        currentNum = checkDisplayValue();
        resetDisplay = true;
        eqClicked = true;

        display.val(result());
    }
});

$('#clearButton').click(function() { // eslint-disable-line 
    resetDisplay = false;

    op = '';
    opClicked = false;

    previousNum = 0;
    currentNum = 0;

    display.val('');
});
