/**
 * DOM events
 * 
 * 1. input / select
 * 2. keyup / keydown
 */

let inputValue;

// let inputElement = document.querySelector('input[type="text"]');

// chỉ hiện giá trị khi blur (không focus vào ô input) ra khỏi input
// inputElement.onchange = function(e) {
//     console.log(e.target.value);
// }

// hiện giá trị ngay khi nhập vào input
// inputElement.oninput = function(e) {
//     // console.log(e.target.value);
//     inputValue = e.target.value;
// }
/**------------------------------------------------ */

// let inputElement = document.querySelector('input[type="checkbox"]');

// inputElement.onchange = function(e) {
//     console.log(e.target.checked);
// }

/**------------------------------------------------ */

// let inputElement = document.querySelector('select');

// inputElement.onchange = function(e) {
//     console.log(e.target.value);
// }

/**------------------------------------------------ */
/**
 * 2. keyup / keydown
 */

// let inputElement = document.querySelector('input[type="text"]');

// inputElement.onkeyup = function(e) {
//     console.log(e.which);

//     switch(e.which) {
//         case 27:
//             console.log('Exit');
//             break;
//         case 13:
//             console.log('Enter');
//             break;
//     }
// }

/**
 * which, keyCode, charCode (deprecated) - không nên sử dụng
 */

// lắng nghe sự kiện keydown trên toàn bộ trang web
document.onkeydown = function(e) {
    // console.log(e.code);
    console.log(e.key);
    // switch(e.code) {
    //     case 27:
    //         console.log('Exit');
    //         break;
    //     case 13:
    //         console.log('Enter');
    //         break;
    // }
}