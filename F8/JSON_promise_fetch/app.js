

let courseApi = 'http://localhost:3000/courses';

function start() {
    // getCourses(function(courses) {
    //     renderCourses(courses);
    // });

    getCourses(renderCourses);

    handleCreateForm();
}

start();

function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

function createCourse(data, callback) {
    let options= {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        body: JSON.stringify(data),
    }
    fetch(courseApi, options)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function handleDeleteCourse(id) {
    let options= {
        method: 'delete'
    }
    fetch(courseApi + '/' + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            // mỗi lần xoá xong thì render lại thì phải call api -> ảnh hưởng tới hiệu năng
            
            // getCourses(renderCourses);

            // cách giải quyết: xoá trực tiếp trên giao diện
            let courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove();
            }

        });
}

function renderCourses(courses) {
    let listCoursesBlock = document.getElementById('list-courses');

    let htmls = courses.map(function(course) {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xoá</button>
            </li>
        `;
    })

    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    let createBtn = document.getElementById('create');

    createBtn.onclick = function() {
        let name = document.querySelector('input[name="name"]').value;
        let description = document.querySelector('input[name="description"]').value;

        let formData = {
            name: name,
            description: description,
        }

        createCourse(formData);
        // createCourse(formData, function() {
        //     getCourses(renderCourses);
        // });
    }
}