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

    // const orderedA = {};
    // Object.keys(hashA).sort().forEach(function(key) {
    //     orderedA[key] = hashA[key];
    // });

    for (let char of stringB) {
        if (hashB[char]) hashB[char] ++;
        else hashB[char] = 1;
    }

    if (Object.entries(hashA) !== Object.entries(hashB)) isSame = false;



    for (let key in hashA) {
        if (!hashB[key] || hashB[key] !== hashA[key]) isSame = false;
    }

    Object.entries(hashA).forEach()

    return isSame;

    // const orderedB = {};
    // Object.keys(hashB).sort().forEach(function(key) {
    //     orderedB[key] = hashB[key];
    // });
    //
    // return JSON.stringify(orderedA) === JSON.stringify(orderedB);

    // TODO: How would you compare the two if you couldn't sort
}

module.exports = anagrams;
