let users = [
    {
        id: 1,
        name: 'Duc Anh'
    },
    {
        id: 2,
        name: 'Nam Hoang'
    },
    {
        id: 3,
        name: 'Phuc Nguyen'
    }
];

let comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Em ăn cơm chưa?'
    },,
    {
        id: 2,
        user_id: 2,
        content: 'Chưa anh ơi'
    },
    {
        id: 3,
        user_id: 1,
        content: 'OK anh sẽ chờ'
    }
];

/**
 * 1. lấy comments
 * 2. từ comments lấy ra user_id, từ user_id lấy ra user tương ứng
 */

// fake API
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000)
    });
}

function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        let result = users.filter(function(user) {
            return userIds.includes(user.id);
        });
        setTimeout(function() {
            resolve(result);
        }, 1000)
    })
}

// 14:09
getComments()
    .then(function() {
        // console.log(comments);

        // lấy ra user_id từ comments
        let userIds = comments.map(function(comment) {
            return comment.user_id;
        });
        // console.log(userIds);

        // lấy ra user, comment từ userIds
        return getUsersByIds(userIds)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments
                };
            });
    })
    .then(function(data) { //data là object chứa users và comments (kết quả trả về từ getUsersByIds)
        let commentBlock = document.getElementById('comment-block');
        
        let html = '';
        data.comments.forEach(function(comment) {
            let user = data.users.find(function(user) {
                return user.id === comment.user_id; //tìm user có id trùng với user_id của comment (join user_id từ comments với id từ users)
            })
            html += `<li>${user.name}: ${comment.content}</li>`;
        });

        commentBlock.innerHTML = html;
    })

