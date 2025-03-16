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

// rest parameters là phần còn lại của 1 list các tham số
// rest parameters sẽ trả về 1 array
// function logger(a, ...params) {
//     console.log(params);
// }
// logger(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function logger({  name, price, ...rest }) {
//     console.log(name);
//     console.log(price);
//     console.log(rest);
// }

function logger([a, b, ...rest]) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

// logger({
//     name: 'Javascript',
//     price: 1000,
//     description: 'Good'
// })

logger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);