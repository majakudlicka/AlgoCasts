// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reverse().join('');
}

reverse('abcd');

module.exports = reverse;

// node inspect index.js (debugger mode)
// Type cont or c to continue
// Type repl to enter repl mode (where you can inspect variables)
