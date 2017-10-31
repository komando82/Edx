namespace ArrayUtilities {
    export function firstItemOfArray(array: Array<number>) {
        return array.slice(0).shift();
    }
    export function concatenateArray(array1: Array<number>, array2: Array<number>) {
        return array1.concat(array2);
    }
}