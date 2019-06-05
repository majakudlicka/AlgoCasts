// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
 for (let i=0; i< arr.length; i++) {
     for (let j = 0; j < arr.length -i; j++) {
         let prev = arr[j];
         let next = arr[j+1];
         if (prev > next) {
             arr[j] = next;
             arr[j+1] = prev;
         }
     }
 }

 return arr;
}

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++ ) {
        let minIndex = i;
        for (let j = i+1; j< arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let minVal = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = minVal;

    }

    return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
