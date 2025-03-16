/**
 * 1. IIFE
 * 2. Closure
 * 3. Hoisting
 * 4. Strict mode
 * 5. This keyword
 * 6. Bind method
 * 7. Call method
 * 8. Apply method
 * 9. Catching, throwing errors
 * 10. Promise
 * 11. Async function, await
 */

// 1. IIFE : hàm tự gọi ngay khi khai báo
// (function() {
//     console.log('Now');
// })();

// (() => {
//     console.log('hello');
// })();

// (function(message) {
//     console.log(message);
// })('chào bạn');

// để dấu ; trước IIFE
// ;(function() {
//     console.log('Now');
// })()


// đệ quy
// let i = 0
// ;(function myFunc() {
//     i++
//     console.log(i)

//     if (i < 10)
//         myFunc()
// })()

const app = (function() {
    // private
    const cars = []

    return {
        // public
        get(index) {
            return cars[index]
        },
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index] = car
        },
        delete(index) {
            cars.splice(index, 1)
        }
    }
})()
