/**
 * this keyword
 * 
 * Từ khoá this trong JavaScript tham chiếu đến đối tượng mà nó thuộc về.
 * 
 * Đặc tính: liên quan đến context (ngữ cảnh) mà nó được gọi
 * 1. Trong một phương thức, this tham chiếu đến đối tượng truy cập phương thức đó (đối tượng trước dấu ".")
 * 2. Đứng ngoài phương thức (this trong hàm), this tham chiếu đến đối tượng global (window)
 * 3. this trong arrow function ...
 * 
 * Lưu ý:
 *  - this trong hàm tạo là đại diện cho đối tượng sẽ được tạo
 *  - this trong một hàm là undefined khi ở strict mode
 *  - Các phương thức bind(), call(), apply() có thể tham chiếu this tới đối tượng khác
 */