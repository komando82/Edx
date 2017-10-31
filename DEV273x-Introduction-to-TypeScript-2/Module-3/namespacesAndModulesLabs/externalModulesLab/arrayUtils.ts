import * as _ from "lodash";
class ArrayUtilities {
    reverseArray(array: Array<any>) {
        return _.reverse(array.slice(0));
    } 
    lastItemOfArray(array: Array<any>) {
        return _.last(array.slice(0));
    }
    firstItemOfArray(array: Array<any>) {
        return _.head(array.slice(0));
    }
    concatenateArray(array1: Array<any>, array2: Array<any>) {
        return _.concat(array1, array2);
    }
}
export default new ArrayUtilities;