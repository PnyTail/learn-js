/**
 * Fetch
 * - JSON server: API server(fake) / mock API
 *  - CRUD
 *      - Create: POST
 *      - Read: GET
 *     - Update: PUT/PATCH
 *    - Delete: DELETE
 * - postman 
 */

let courseApi = 'http://localhost:3000/courses';

fetch(courseApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(courses) {
        console.log(courses);
    })