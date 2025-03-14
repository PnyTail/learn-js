/**
 * cài đặt json-server : https://github.com/typicode/json-server
 * cài đặt json-server : 
 *  npm init
 *  npm install json-server
 *  tạo file db.json
 *  thêm dòng này vào file package.json, đoạn scripts:
 *      "start": "json-server --watch db.json",
 *  npm start 
 */

let courseApi = 'http://localhost:3000/courses';

fetch(courseApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(courses) {
        console.log(courses);
    })