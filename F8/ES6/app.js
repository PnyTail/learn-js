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

// destructuring: phân rã, dùng với object và array

let array = ['Javascript', 'PHP', 'Ruby'];

// cách cũ
// let a = array[0];
// let b = array[1];
// let c = array[2];

// cách mới: lấy ra 3 phần tử trong mảng array
// let [a, b, c] = array;
// console.log(a, b, c);

// lấy ra 2 phần tử trong mảng array
// let [a, , c] = array;
// console.log(a, c);

// lấy ra phần tử đầu tiên và phần còn lại (rest parameters)
// let [a, ...rest] = array;

// console.log(a);
// console.log(rest);

/** ------------------------------- */

let course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address'
    // ,children: {
    //     name: 'ReactJS'
    // }
};

// let {name, price} = course;
// let {name, ...rest} = course;
// let { name: parentName, children: { name: childrenName }} = course;

// console.log(name);
// console.log(rest);
// console.log(parentName);
// console.log(childrenName);

// let { name, description = 'default description' } = course;
// console.log(name);
// console.log(description);

// dấu 3 chấm -> toán tử rest
function logger(...params) {
    console.log(params);
}

// logger(1, 2, 3, 4, 5);
console.log(logger(1, 2, 3, 4, 5)); // undefined