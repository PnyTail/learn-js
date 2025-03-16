/**
 * ECMAScript 6 - ES6 - ECMAScript 2015
 * 
 * 1. let, const
 * 2. Template literals
 * 3. multi-line strings
 * 4. Arrow functions
 * 5. classes
 * 6. default parameters values
 * 7. destructuring
 * 8. rest parameters
 * 9. Spread
 * 10. Enhanced Object Literals
 * 11. Tagged template literals
 * 12. Modules
 * 
 * 
 * Babel
 */

// function highlight(...rest) {
//     // console.log(rest);
// }

function highlight([first, ...strings], ...values) {
    return values.reduce((acc, curr) => 
        [...acc, `<span>${curr}</span>`, strings.shift()], 
        [first]
    )
    .join('');
}

let brand = 'w3schools';
let course = 'JavaScript';

const html = highlight`Free ${course} course at ${brand}!`;

console.log(html);
