import ArrayUtilities from './arrayUtils.js'

let array1 = [
    1,
    2,
    3,
    4,
    5
];
let array2 = [
    6,
    7,
    8,
    9,
    10
];

function callArrayUtil(util, array, array2 = null) {
    document.getElementById("output").innerHTML = ArrayUtilities[util](array, array2).toString()
}

for (let property in ArrayUtilities) {
    document.getElementById(property).onclick = function() {
        callArrayUtil(property, array1, array2)
    }
}

document.getElementById("output").innerHTML= array1.toString();
