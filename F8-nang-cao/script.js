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

/** Scope - Phạm vi */

/**
 * - Các loại phạm vi:
 *      - Global - toàn cầu: khai báo ở vị trí bên ngoài (không trong block nào cả)
 *      - code block - khối mã: let, const
 *      - local scope - hàm: var, function 
 *      var (phạm vi gần nhất bên ngoài) (không khai báo trong hàm)
 * 
 * - Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo (kể cả là 1 hàm được gọi nhiều lần)
 * - Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
 * - Cách thức một biến được truy cập
 * - Khi nào một biến bị xoá khỏi bộ nhớ?
 *      - biến toàn cầu? -> bị xoá khi chương trình kết thúc. web thì là tắt tab, f5, đóng trình duyệt
 *      - biến trong block code & trong hàm?
 *      - biến trong hàm được tham chiếu bởi 1 hàm
 */