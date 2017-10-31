"use strict";
exports.__esModule = true;
var arrayUtils_js_1 = require("./arrayUtils.js");
var array1 = [
    1,
    2,
    3,
    4,
    5
];
var array2 = [
    6,
    7,
    8,
    9,
    10
];
function callArrayUtil(util, array, array2) {
    if (array2 === void 0) { array2 = null; }
    document.getElementById("output").innerHTML = arrayUtils_js_1["default"][util](array, array2).toString();
}
var _loop_1 = function (property) {
    document.getElementById(property).onclick = function () {
        callArrayUtil(property, array1, array2);
    };
};
for (var property in arrayUtils_js_1["default"]) {
    _loop_1(property);
}
document.getElementById("output").innerHTML = array1.toString();
