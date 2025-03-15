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
 * 1. var / let, const: scope, hoisting
 * 2. const / var, let: assignment (gán lại giá trị)
 *  không thể gán lại giá trị cho const
 */

/**
 * Scope: phạm vi của biến
 * code block: {}
 * var là toàn cục; let, const là cục bộ (block-scoped)
 * 
 * Khi định nghĩa biến và không gán lại giá trị, sử dụng const
 * Khi cần gán lại giá trị cho biến, sử dụng let
 */

{
    let a = 10;
}

console.log(a);

/**
 * hoisting: là đưa các khai báo lên trên cùng của scope (đưa lên đầu)
 */