/*
 * Implement all your JavaScript in this file!
 */

var display = $('#display');

var button0 = $('#button0'),
    button1 = $('#button1'),
    button2 = $('#button2'),
    button3 = $('#button3'),
    button4 = $('#button4'),
    button5 = $('#button5'),
    button6 = $('#button6'),
    button7 = $('#button7'),
    button8 = $('#button8'),
    button9 = $('#button9');

var addButton = $('#addButton'),
    subtractButton = $('#subtractButton'),
    multiplyButton = $('#multiplyButton'),
    divideButton = $('#divideButton');

var clearButton = $('#clearButton');

var equalsButton = $('#equalsButton');

var resetDisplay = false;

var op = '';

var previousNum = 0;
var currentNum = 0;



function checkDisplayValue()
{
    return display.val();
}

function result(op, previousNum, currentNum)
{
    if (previousNum === 0)
    {
        return currentNum;
    }

    var result;

    previousNum = parseInt(previousNum);
    currentNum = parseInt(currentNum);

    switch(op) {
        case "+":
            result = previousNum + currentNum;
            break;
        case "-":
            result = previousNum - currentNum;
            break;
        case "*":
            result = previousNum * currentNum;
            break;
        case "/":
            if (currentNum === 0)
            {
                result = 'Infinity';
            }
            else
            {
                result = previousNum / currentNum;
            }
            break;
    }

    return result;
}


$('#button0, #button1, #button2, #button3, #button4, #button5, #button6, #button7, #button8, #button9').click(function(){
    var clickedNum = $(this).val();
    if(resetDisplay)
    {
        display.val(clickedNum);
        resetDisplay = false;
    }
    else
    {
        display.val(checkDisplayValue() + clickedNum);
    }
    console.log(clickedNum);
});

addButton.click(function(){
    currentNum = checkDisplayValue();
    resetDisplay = true;
    previousNum = result(op, previousNum, currentNum);
    op = '+';
    console.log("+");
    display.val(previousNum);
});

subtractButton.click(function(){
    currentNum = checkDisplayValue();
    resetDisplay = true;
    previousNum = result(op, previousNum, currentNum);
    op = '-';
    console.log("-");
    display.val(previousNum);
});

multiplyButton.click(function(){
    currentNum = checkDisplayValue();
    resetDisplay = true;
    previousNum = result(op, previousNum, currentNum);
    op = '*';
    console.log("*");
    display.val(previousNum);
});

divideButton.click(function(){
    currentNum = checkDisplayValue();
    resetDisplay = true;
    previousNum = result(op, previousNum, currentNum);
    op = '/';
    console.log("/");
    display.val(previousNum);
});



equalsButton.click(function(){
    currentNum = checkDisplayValue();
    resetDisplay = true;
    console.log("=");
    console.log(previousNum);
    console.log(currentNum);
    display.val(result(op, previousNum, currentNum));
});