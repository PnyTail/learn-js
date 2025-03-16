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

// Enhanced Object Literals

/**
 * 1. Property value shorthand
 * 2. Method properties
 * 3. Computed property names
 * 
 * 1. Định nghĩa key:value cho object (ngắn gọn hơn)
 * 2. Định nghĩa method cho object (ngắn gọn hơn)
 * 3. Định nghĩa key của object dưới dạng biến
 */

let name = 'JavaScript';
let price = 1000;

// Cách cũ
// let course = {
//     name: name,
//     price: price,
//     getName: function() {
//         return name;
//     }
// };

// Cách mới: enhanced object literals
// let course = {
//     name,
//     price,
//     getName() {
//         return name;
//     }
// }

// // console.log(course);
// console.log(course.getName());


// 3. Định nghĩa key của object dưới dạng biến
let fieldName = 'name';
let fieldPrice = 'price';

const course = {
    [fieldName]: 'JavaScript',
    [fieldPrice]: 1000
};

console.log(course);