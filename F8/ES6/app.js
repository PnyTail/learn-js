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
 * Modules: import, export
 */

// import logger, { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from './logger.js';
import logger from './logger.js';
// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './constants.js';
import * as constants from './constants.js'; // * là tất cả các export khác trong file constants.js


logger('Message...', constants.TYPE_ERROR);