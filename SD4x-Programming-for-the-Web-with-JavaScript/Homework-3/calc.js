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

var firstNum = '';
var secondNum = '';



function checkDisplayValue()
{
    if (resetDisplay){
        return '';
    }

    return display.val();
}

function result(op, num1, num2)
{
    var result;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    switch(op) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0)
            {
                result = 'Infinity';
            }
            else
            {
                result = num1 / num2;
            }
            break;
    }

    return result;
}


button0.click(function(){
    display.val(checkDisplayValue() + '0');
    resetDisplay = false;
    console.log("0");
});

button1.click(function(){
    display.val(checkDisplayValue() + '1');
    resetDisplay = false;
    console.log("1");
});

button2.click(function(){
    display.val(checkDisplayValue() + '2');
    resetDisplay = false;
    console.log("2");
});

button3.click(function(){
    display.val(checkDisplayValue() + '3');
    resetDisplay = false;
    console.log("3");
});

button4.click(function(){
    display.val(checkDisplayValue() + '4');
    resetDisplay = false;
    console.log("4");
});

button5.click(function(){
    display.val(checkDisplayValue() + '5');
    resetDisplay = false;
    console.log("5");
});

button6.click(function(){
    display.val(checkDisplayValue() + '6');
    resetDisplay = false;
    console.log("6");
});

button7.click(function(){
    display.val(checkDisplayValue() + '7');
    resetDisplay = false;
    console.log("7");
});

button8.click(function(){
    display.val(checkDisplayValue() + '8');
    resetDisplay = false;
    console.log("8");
});

button9.click(function(){
    display.val(checkDisplayValue() + '9');
    resetDisplay = false;
    console.log("9");
});


addButton.click(function(){
    firstNum = checkDisplayValue();
    resetDisplay = true;
    op = '+';
    console.log("+");
});

subtractButton.click(function(){
    firstNum = checkDisplayValue();
    resetDisplay = true;
    op = '-';
    console.log("-");
});

multiplyButton.click(function(){
    firstNum = checkDisplayValue();
    resetDisplay = true;
    op = '*';
    console.log("*");
});

divideButton.click(function(){
    firstNum = checkDisplayValue();
    resetDisplay = true;
    op = '/';
    console.log("/");
});



equalsButton.click(function(){
    secondNum = checkDisplayValue();
    resetDisplay = true;
    console.log("=");
    console.log(firstNum);
    console.log(secondNum);
    display.val(result(op, firstNum, secondNum));
});