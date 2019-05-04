// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
function pyramid(n) {
    const numberOfColumns = 2*n -1;

    for (let i = 0; i<n; i++) {
        let step = '';
        for (let j =1; j <= numberOfColumns; j++) {
            if (j >= (n -i) && j <= (n+i)) {
                step+='#'
            } else {
                step += ' ';
            }
        }
        console.log(step);
    }

}

module.exports = pyramid;
