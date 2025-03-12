/**
 * 1. Element
 * 2. Attribute
 * 3. Text
 */
/**
 * innerHTML, outerHTML
 */

let boxElement = document.querySelector('.box');

// boxElement.innerHTML = '<h1>Heading</h1>';

console.log(boxElement.outerHTML);

boxElement.outerHTML = '<span>Test</span>';

