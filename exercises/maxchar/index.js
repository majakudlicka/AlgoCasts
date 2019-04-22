// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const counter = {};
    str.split('').forEach(char=> {
        if (counter[char]) counter[char]++;
        else counter[char] = 1;
    });

    const pairs = Object.entries(counter);
    let hightestPair = pairs[0];

    pairs.forEach(pair=>{
        if (pair[1] > hightestPair[1]) hightestPair = pair;
    });

    return hightestPair[0];
}

module.exports = maxChar;

// for of -> used to iterate over arrays/ strings
// for in -> used to iterate over object KEYS!!
