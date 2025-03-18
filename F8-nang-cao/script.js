/**
 * Call method
 * 
 * Là phương thức trong prototype của Function destructor, phương thức này được dùng để
 *  gọi hàm và cũng có thể bind this cho hàm
 * 
 * Ví dụ:
 *  - Gọi hàm với call method
 *  - Gọi hàm và bind this, lưu ý trong strict mode vẫn có this nếu được bind
 *  - Thể hiện tính kế thừa (extends) trong OOP
 *  - Mượn hàm (function borrowing), thêm ví dụ với arguments
 */

const teacher = {
    firstName: 'Minh',
    lastName: 'Thu'
}

const me = {
    firstName: 'Nam',
    lastName: 'Hoàng',
    showFullName() {
        // console.log(this)
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

// me.showFullName(); // Nam Hoàng
me.showFullName.call(teacher); // Minh Thu, mượn hàm showFullName của me cho teacher