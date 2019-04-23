// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     const chunked = [];
//     array.forEach(el=>{
//         let lastChunkedEl = chunked[chunked.length - 1];
//         if (!lastChunkedEl || lastChunkedEl.length === size) {
//             chunked.push([el])
//         } else {
//             lastChunkedEl.push(el);
//         }
//     });
//
//     return chunked;
// }

function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        const chunk = array.slice(index, index+ size);
        chunked.push(chunk);
        index = index + size;
    }

    return chunked;
}

module.exports = chunk;
