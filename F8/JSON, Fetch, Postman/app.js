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

/** ------------------------------------------------------ */

// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms);
//     });
// }

// sleep(1000)
//     .then(function() {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(2);
//         return new Promise(function(resolve, reject) {
//             reject("Có lỗi");
//         }) 
//     })
//     .then(function() {
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(4);
//     })
//     .catch(function(error) {
//         console.log(error);
//     })


/** --------------------------------------------------------- */
/**
 * 1. promise.resolve
 * 2. promise.reject
 * 3. promise.all
 */

// let promise = new Promise(function(resolve, reject) {
//     resolve('Success');
// });

// tạo 1 promise thành công
// let promise = Promise.resolve('success');
// let promise = Promise.reject('error');

// promise
//     .then(function(result) {
//         console.log(result);
//     })
//     .catch(function(error) {
//         console.log('lỗi: ', error);
//     })

/**
 * 1 số Thư viện: output luôn là 1 promise
 */

/** --------------------------------------------------------- */

let promise1 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve([1]);
    }, 2000)
});

let promise2 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve([2, 3]);
    }, 5000)
});

// let promise2 = Promise.reject('Có lỗi');

/**
 * promise1 tốn 2s
 * promise2 tốn 5s
 * 
 * nếu chạy đồng bộ thì tốn 7s -> lâu
 * => dùng Promise.all để chạy song song 2 promise => tốn 5s
 */

Promise.all([promise1, promise2])
    .then(function(result) {
        // console.log(result);

        let result1 = result[0];
        let result2 = result[1];

        console.log(result1.concat(result2)); //nối 2 mảng
    })
    .catch(function(){ // nếu 1 trong 2 promise thất bại thì sẽ vào đây
        console.log('Có lỗi');
    })