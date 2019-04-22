// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const isPositiveOrZero = n >= 0;
    const reversed = parseFloat(n.toString().split('').filter((char)=> char !== 0).reverse().join(''));
    return isPositiveOrZero ? reversed : -reversed;
}

module.exports = reverseInt;
