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

/**
 * spread (...) : toán tử trải dài (rải ra)
 */

// let array1 = ['JavaScript', 'Python', 'PHP'];

// let array2 = ['ReactJS', 'VueJS'];

// // ... sẽ bỏ 2 dấu ngoặc vuông của array2, chỉ còn lại các phần tử trong array2
// let array3 = [...array2, ...array1];

// console.log(array3);

/** -------------------------------------------------- */

// tương tự, ... sẽ bỏ 2 dấu ngoặc nhọn của object
// let object1 = {
//     name: 'JavaScript'
// };

// let object2 = {
//     price: 1000
// };

// let object3 = {
//     ...object1,
//     ...object2
// };

// console.log(object3);


/** -------------------------------------------------- */

let array = ['JavaScript', 'PHP', 'Ruby'];

// function logger(a, b, c) {
//     console.log(a, b, c);
// }

function logger(...rest) {
    for (let i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}

// logger(1, 2, 3); // 1 2 3
logger(...array); // JavaScript PHP Ruby

