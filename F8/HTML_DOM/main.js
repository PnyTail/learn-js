/**
 * DOM events
 * 
 * 1. preventDefault() : stop default action - loại bỏ hành vi mặc định của sự kiện (của trình duyệt)
 * (ví dụ: click vào thẻ a sẽ chuyển trang)
 * 
 * 2. stopPropagation() : stop bubbling - loại bỏ sự kiện nổi bọt
 */

// let aElements = document.querySelectorAll('a');

// // console.log(aElements);

// for (let i = 0 ; i < aElements.length; i++) {
//     aElements[i].onclick = function(e) {
//         // console.log(e.target.href);
//         if (!e.target.href.startsWith('https://www.w3schools.com/')) {
//             e.preventDefault();
//         }
//     }
// }

/** ------------------------------------------------ */

// let ulElement = document.querySelector('ul');

// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }

// ulElement.onclick = function(e) {
//     console.log(e.target);
// }

/** ------------------------------------------------ */


document.querySelector('div').onclick = function(e) {
    console.log('DIV')
}

let btnElement = document.querySelector('button');

btnElement.onclick = function(e) {
    e.stopPropagation();
    console.log('click me')
}
