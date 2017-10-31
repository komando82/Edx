var ArrayUtilities;
(function (ArrayUtilities) {
    function firstItemOfArray(array) {
        return array.slice(0).shift();
    }
    ArrayUtilities.firstItemOfArray = firstItemOfArray;
    function concatenateArray(array1, array2) {
        return array1.concat(array2);
    }
    ArrayUtilities.concatenateArray = concatenateArray;
})(ArrayUtilities || (ArrayUtilities = {}));
/// <reference path="extendedNamespacesLab_part2.ts" />
var ArrayUtilities;
(function (ArrayUtilities) {
    function reverseArray(array) {
        return array.slice(0).reverse();
    }
    ArrayUtilities.reverseArray = reverseArray;
    function lastItemOfArray(array) {
        return array.slice(0).pop();
    }
    ArrayUtilities.lastItemOfArray = lastItemOfArray;
})(ArrayUtilities || (ArrayUtilities = {}));
