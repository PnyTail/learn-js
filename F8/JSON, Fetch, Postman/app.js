/**
 * Promise
 * 
 * - sync
 * - async
 */

/**
 * async: làm việc bất đồng bộ
 * setTimeout, setInterval, fetch, XMLHttpRequest, file reading (đọc file), request animation frame
 * 
 * sync: làm việc đồng bộ
 * DOM, console.log, math, array, string, object, ...
 */

// setTimeout(function() {
//     console.log('1')
// }, 1000);

// console.log('2');

/**
 * callback hell
 * - callback hell là tình trạng lồng callback quá nhiều
 * - code trở nên khó đọc, khó hiểu, khó maintain
 * - callback hell xảy ra khi có quá nhiều callback lồng vào nhau
 * - giải pháp: Promise, async/await
 * 
 * pyramid of doom
 * - pyramid of doom là tình trạng lồng callback quá nhiều
 * - code trở nên khó đọc, khó hiểu, khó maintain
 * - giải pháp: Promise, async/await
 * 
 * Promise
 * - Promise is an object that may produce a single value some time in the future
 * - Promise is a placeholder for a value that may not be available yet
 * - Promise is a proxy for a value not necessarily known when the promise is created
 * - Promise is a way to write async code that is easier to read and maintain
 * 
 */

/**
 * tạo promise
 * 1. new Promise
 * 2. excutor
 */

/**
 * 3 trạng thái của promise
 * - pending: trạng thái khởi tạo, chờ xử lý
 * - fulfilled: trạng thái thành công
 * - rejected: trạng thái thất bại
 * 
 * 1 promise chỉ chuyển từ pending -> fulfilled hoặc pending -> rejected
 * 
 * promise.then() -> xử lý khi promise thành công
 * promise.catch() -> xử lý khi promise thất bại
 * promise.finally() -> xử lý sau khi promise kết thúc (thành công hoặc thất bại)
 */

// let promise = new Promise(
//     // excutor
//     function(resolve, reject) {
//         // Logic
//         // Khi logic Thành công: resolve()
//         // Khi logic Thất bại: reject()

//         resolve();
//     }
// );


/**
 * chain
 * return giá trị của then để truyền cho then tiếp theo
 * nếu không return thì giá trị của then tiếp theo sẽ là undefined
 */
// promise
//     .then(function() {
//         return new Promise(function(resolve) {
//             setTimeout(function() {
//                 resolve([1, 2, 3]);
//             }, 3000);
//         });
//     })
//     .then(function(data) {
//         console.log(data);
//         return 2;
//     })
//     .catch(function(error) {
//         console.log(error);
//     })
//     .finally(function() {
//         console.log('Done');
//     });


function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return sleep(1000);
    })
    .then(function() {
        console.log(3);
    })
