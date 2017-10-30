var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DiceNumbers;
(function (DiceNumbers) {
    DiceNumbers[DiceNumbers["One"] = 0] = "One";
    DiceNumbers[DiceNumbers["Two"] = 1] = "Two";
    DiceNumbers[DiceNumbers["Three"] = 2] = "Three";
    DiceNumbers[DiceNumbers["Four"] = 3] = "Four";
    DiceNumbers[DiceNumbers["Five"] = 4] = "Five";
    DiceNumbers[DiceNumbers["Six"] = 5] = "Six";
})(DiceNumbers || (DiceNumbers = {}));
var Dice = /** @class */ (function () {
    function Dice(div) {
        this.div = div;
    }
    return Dice;
}());
var DiceRoller = /** @class */ (function (_super) {
    __extends(DiceRoller, _super);
    function DiceRoller(div) {
        var _this = _super.call(this, div) || this;
        _this.div.style.width = squareSize;
        _this.div.style.height = squareSize;
        _this.div.style.border = squareBorder;
        _this.div.style.display = squareDisplay;
        _this.div.style.margin = squareMargin;
        _this.div.style.textAlign = squareAlign;
        _this.div.style.lineHeight = squareSize;
        _this.div.style.fontSize = squareFontSize;
        return _this;
    }
    DiceRoller.prototype.changeNumber = function (number) {
        this.div.textContent = DiceNumbers[number];
        return true;
    };
    DiceRoller.DiceNumbers = DiceNumbers;
    return DiceRoller;
}(Dice));
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var elementSets = [];
var color;
// Square styles in variables
var squareSize = "100px";
var squareBorder = "10px solid black";
var squareDisplay = "inline-block";
var squareMargin = "0 20px 0 0";
var squareAlign = "center";
var squareFontSize = "24px";
for (var index = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div')
    });
}
var diceArray = [];
elementSets.map(function (elem, index) {
    var numberChangeClass = new DiceRoller(elem.div);
    diceArray.push(numberChangeClass);
    numberChangeClass.changeNumber(getRandomIntInclusive(0, 5));
    document.body.appendChild(elem.div);
});
var button = document.createElement('button');
// Button styles in variables
button.innerText = "Roll the Dice";
button.style.padding = "5px 20px";
button.style.fontSize = "20px";
button.style.cursor = "pointer";
document.body.appendChild(button);
button.onclick = function (event) {
    diceArray.map(function (elem, index) {
        elem.changeNumber(getRandomIntInclusive(0, 5));
    });
};
