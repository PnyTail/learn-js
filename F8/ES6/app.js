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

// function logger(log = 'giá trị mặc định') {
//     console.log(log);
// }

// function logger(log, isAlert) {
//     if (isAlert) return alert(log);
//     console.log(log);
// }

function logger(log, type = 'log') {
    console[type](log);
}

// logger('message');
logger('message', 'warn');
// logger('message', 'error');