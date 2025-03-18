/**
 * Apply method
 * 
 * Phương thức này cho phép gọi một hàm với một this (bind) và truyền đổi số cho hàm gốc dưới dạng mảng.
 * 
 * về cơ bản nó giống call() method
 */

const teacher = {
    firstName: "Minh",
    lastName: "Thu"
}
    
function greet(greeting, message) {
    return `${greeting} ${this.firstName} ${this.lastName}. ${message}`
}
    
let result = greet.apply(teacher, ['Em chào cô', 'Cô dạy môn gì thế ạ? (Đã xem cô live stream 1 tiếng)'])

console. log(result)

// So sánh với call() method
result = greet.call(teacher, 'Em chào cô', 'Cô dạy môn gì thế ạ? (Đã xem cô live stream 1 tiếng)')

console.log(result)

/**
 * so sánh bind, call, apply
 */
