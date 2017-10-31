"use strict";
exports.__esModule = true;
var _ = require("lodash");
var ArrayUtilities = /** @class */ (function () {
    function ArrayUtilities() {
    }
    ArrayUtilities.prototype.reverseArray = function (array) {
        return _.reverse(array.slice(0));
    };
    ArrayUtilities.prototype.lastItemOfArray = function (array) {
        return _.last(array.slice(0));
    };
    ArrayUtilities.prototype.firstItemOfArray = function (array) {
        return _.head(array.slice(0));
    };
    ArrayUtilities.prototype.concatenateArray = function (array1, array2) {
        return _.concat(array1, array2);
    };
    return ArrayUtilities;
}());
exports["default"] = new ArrayUtilities;
