"use strict";
exports.__esModule = true;
var ArrayUtilities = /** @class */ (function () {
    function ArrayUtilities() {
    }
    ArrayUtilities.prototype.reverseArray = function (array) {
        return array.slice(0).reverse();
    };
    ArrayUtilities.prototype.lastItemOfArray = function (array) {
        return array.slice(0).pop();
    };
    ArrayUtilities.prototype.firstItemOfArray = function (array) {
        return array.slice(0).shift();
    };
    ArrayUtilities.prototype.concatenateArray = function (array1, array2) {
        return array1.concat(array2);
    };
    return ArrayUtilities;
}());
exports["default"] = new ArrayUtilities;
