// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const queue = [root, null];
    const countArray = [0];

    while (queue.length > 1) {
        let node = queue.shift();
        if (node) {
            countArray[countArray.length - 1]++;
            queue.push(...node.children);
        } else {
            countArray.push(0);
            queue.push(null);
        }
    }
    return countArray;
}

module.exports = levelWidth;
