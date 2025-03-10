// DOM attributes

let headingElement = document.querySelector('h1');

// console.log(headingElement);

// thêm attribute vào element, cách 1
// headingElement.title = 'This is a heading';
// headingElement.id = 'main-heading';
// headingElement.className = 'heading';

// cách 2: dùng setAttribute để thêm attribute vào element
// headingElement.setAttribute('title', 'ahihi');

// lấy ra giá trị (value) của attribute (class)
// console.log(headingElement.getAttribute('class'));

headingElement.title = 'This is a heading';
console.log(headingElement.title);