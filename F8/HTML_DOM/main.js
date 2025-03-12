/**
 * classList property
 * 
 * add() - add a class to an element
 * remove() - remove a class from an element
 * toggle() - toggle between adding and removing a class from an element
 * contains() - check if an element contains a class
 */


let boxElement = document.querySelector('.box');

// console.log(boxElement.classList.length); // 2
// console.log(boxElement.classList[0]); // box
// console.log(boxElement.classList.value); // box box-2

boxElement.classList.add('red');

// check if an element contains a class
// console.log(boxElement.classList.contains('red')); // true

// remove a class from an element
// boxElement.classList.remove('red');

// toggle between adding and removing a class from an element
// setTimeout(() => {
//     boxElement.classList.toggle('red');
// }, 2000);

setInterval(() => {
    boxElement.classList.toggle('red');
}, 1000);



