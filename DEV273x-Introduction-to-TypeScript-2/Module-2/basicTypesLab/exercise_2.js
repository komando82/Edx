var colorChange = /** @class */ (function () {
    function colorChange(div) {
        this.div = div;
    }
    colorChange.prototype.changeColor = function (color) {
        this.div.style.backgroundColor = color;
        return true;
    };
    return colorChange;
}());
var Colors;
(function (Colors) {
    Colors[Colors["Green"] = 0] = "Green";
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Orange"] = 3] = "Orange";
})(Colors || (Colors = {}));
var elementSets = [];
var squareSizeNum = 100;
var squareSize = squareSizeNum + "px";
for (var index = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    });
}
elementSets.map(function (elem, index) {
    var colorChangeClass = new colorChange(elem.div);
    elem.div.style.width = squareSize;
    elem.div.style.height = squareSize;
    elem.button.textContent = "Change Color";
    elem.button.onclick = function (event) {
        colorChangeClass.changeColor(Colors[index]);
    };
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
