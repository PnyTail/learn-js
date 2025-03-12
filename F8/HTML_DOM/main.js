/**
 * DOM styles
 */


let boxElement = document.querySelector('.box');

// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'green';

// cách viết nhiều thuộc tính
Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'red'
});

console.log(boxElement.style.backgroundColor);

