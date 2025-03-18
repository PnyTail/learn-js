"use strict";

// fullName = "Nguyen Van A";

// function testFunc() {
//     age = 18; // tạo biến age ở phạm vi global
// }

// testFunc();
// console.log(fullName); // Nguyen Van A (không dùng strict mode sẽ hiển thị ra giá trị của biến)
// console.log(age); // 18

/**
 * object.freeze() sẽ đóng băng object, không cho phép thay đổi giá trị của object
 * object.seal() sẽ đóng băng object, không cho thêm hoặc xóa thuộc tính của object
 * object.defineProperty() sẽ định nghĩa thuộc tính cho object
 */

// const student= {} //nếu dùng kiểu khai báo object như bình thường thì writable mặc định là true

// Object.defineProperty(student, 'name', {
//     value: 'Nguyen Van A',
//     writable: false, // không cho phép thay đổi giá trị, mặc định là false khi dùng defineProperty
// })

/**
 * báo lỗi khi hàm có tham số trùng tên
 * 
 * function sum(a, a) {
 *  return a + a
 * }
 * console.log(sum(1, 2)) // 4 (lấy số sau ghi đè số trước)
 * 
 */

/**
 * Khai báo hàm trong block code thì hàm sẽ thuộc phạm vi block code đó
 * Không đặt tên biến, tên hàm bằng một số từ khoá "nhạy cảm" của ngôn ngữ
 * 
 * Công dung của strict mode:
 *      - Tránh "quên" từ khoá khi khai báo biến (var let const)
 *      - Tránh trùng tên biến dẫn tới lỗi logic
 *      - Sử dụng bộ nhớ hiệu quả hơn vì không tạo biến global
 */