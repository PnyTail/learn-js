// innerText & textContent

let headingElement = document.querySelector('h1');

// console.log(headingElement.innerText);
// console.log(headingElement.textContent);

// headingElement.innerText = 'Good Bye';

// console.log(headingElement.innerText);
// console.log(headingElement.textContent);

/** innerText will not show the hidden text
 * innerText chỉ hiện thị những text mà người dùng có thể thấy được
 * innerText chỉ tồn tại trong element node
*/

/** textContent will show the hidden text
 * textContent sẽ hiển thị tất cả các text Node trong element
 * textContent tồn tại trong cả element node và text node
 */

/**
 * nội dung nằm giữa một thẻ tag là 1 text Node
 * các thẻ là element node
 */

// headingElement.innerText = '<i>Hello</i>';

// headingElement.innerText = `

// New heading


// `;



headingElement.textContent = `

New heading


`;



