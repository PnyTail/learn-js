/**
 * 1. Event listener
 * 2. JSON
 * 3. Fetch
 * 4. DOM location
 * 5. Local storage
 * 6. Session storage
 * 7. Coding convention
 * 8. Best practice
 * 9. Mistakes
 * 10. Performance
 */

/**
 * 1. Xử lý nhiều việc khi 1 event xảy ra
 * 2. Lắng nghe / Hủy bỏ lắng nghe
 */

let btn = document.getElementById('btn');

function viec1() {
    console.log('viec1');
}
function viec2() {
    console.log('viec2');
}

btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);


// Hủy bỏ lắng nghe
setTimeout(function() {
    btn.removeEventListener('click', viec1);
}, 3000);