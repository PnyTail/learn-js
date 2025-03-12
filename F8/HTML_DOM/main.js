/**
 * DOM events
 * 1. Attribute events
 * 2. Assign event using the element node
 */

let h1Elements = document.querySelectorAll('h1');

// event or "e" for short
// h1Elements.onclick = function(e) {
//     // console.log(Math.floor(Math.random() * 100));
//     console.log(e.target);
// }

for (let i = 0; i < h1Elements.length; i++) {
    h1Elements[i].onclick = function(e) {
        console.log(e.target);
    }
}





