class ArrayUtilities {
    reverseArray(array: Array<any>) {
        return array.slice(0).reverse();
    } 
    lastItemOfArray(array: Array<any>) {
        return array.slice(0).pop();
    }
    firstItemOfArray(array: Array<any>) {
        return array.slice(0).shift();
    }
    concatenateArray(array1: Array<any>, array2: Array<any>) {
        return array1.concat(array2);
    }
}
export default new ArrayUtilities;