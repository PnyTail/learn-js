/**
 * Fetch API
 * 
 * front-end
 * back-end
 * 
 * API (url) - Application Programming Interface
 * cổng giao tiếp giữa các phần mềm
 * 
 * backend -> API -> fetch -> json -> json.parse -> javascript types
 * -> render ra giao diện với html
 */

let postApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApi)
    .then(function(response) {
        // JSON.parse: chuyển từ json -> javascript types
        return response.json(); //json() nó đã parse cho mình rồi
    })
    .then(function(posts) {
        // console.log(posts);
        let htmls = posts.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>        
            </li>`;
        });

        let html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err) {
        console.log(`Có lỗi: ${err}`);
    })