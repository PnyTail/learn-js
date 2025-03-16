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
 * 13. Optional chaining (?.)
 * 
 * Babel
 */

// const obj = {
//     name: 'Alice',
//     cat: {
//         name: 'Dinah',
//         cat2: {
//             name: 'Dinah 2',
//             cat3: {
//                 name: 'Dinah 3'
//             }
//         }
//     }
// };

// dùng optional chaining (?.) khi không chắc chắn key đó có tồn tại hay không

// if (
//     // obj &&
//     // obj.cat &&
//     // obj.cat.cat2 &&
//     // obj.cat.cat2.cat3
//     obj?.cat?.cat2?.cat3
// ) {
//     console.log(obj.cat.cat2.cat3.name);
// }


const obj = {
    // getName(value) {
    //     console.log(value);
    // }
}

obj.getName?.('Alice');