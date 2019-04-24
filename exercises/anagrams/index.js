// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    stringA.replace(/[^\w]/, '').toLowerCase();
    stringB.replace(/[^\w]/, '').toLowerCase();

    const hashA = {};
    const hashB = {};
    let isSame = true;

    for (let char of stringA) {
        if (hashA[char]) hashA[char] ++;
        else hashA[char] = 1;
    }

    for (let char of stringB) {
        if (hashB[char]) hashB[char] ++;
        else hashB[char] = 1;
    }

    if (Object.entries(hashA).length !== Object.entries(hashB).length) isSame = false;


    for (let key in hashA) {
        console.log(key)
        if (!hashB[key] || hashB[key] !== hashA[key]) isSame = false;
    }

    return isSame;

    // Variant 2
    // const orderedA = {};
    // Object.keys(hashA).sort().forEach(function(key) {
    //     orderedA[key] = hashA[key];
    // });

    // const orderedB = {};
    // Object.keys(hashB).sort().forEach(function(key) {
    //     orderedB[key] = hashB[key];
    // });

    // return JSON.stringify(orderedA) === JSON.stringify(orderedB);
}

module.exports = anagrams;
