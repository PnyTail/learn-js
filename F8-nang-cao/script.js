this.firstName = 'Minh'
this.lastName = 'Thu'

// const teacher = {
//     firstName: 'Minh',
//     lastName: 'Thảo',
//     getFullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// case 1
// console.log(teacher.getFullName()) // 'Minh Thảo'

// case 2
// const getTeacherName = teacher.getFullName
// console.log(getTeacherName()) // 'Minh Thu'

// ràng buộc (bind) this với teacher object
// const getTeacherName = teacher.getFullName.bind(teacher)
// console.log(getTeacherName()) // 'Minh Thảo'

/**
 * Phương thức bind() sẽ trả về một hàm mới
 * Có thể nhận các đối số như hàm ban đầu
 */

const teacher = {
    firstName: 'Minh',
    lastName: 'Thảo',
    getFullName: function() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

const button = document.querySelector('button')

// nếu không bind thì this sẽ là button. Nếu bind thì this sẽ là teacher
button.addEventListener('click', teacher.getFullName.bind(teacher))
// button.onclick = teacher.getFullName.bind(teacher)