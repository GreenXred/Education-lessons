// 1. Сделай HTML-форму для создания нового поста с полями id пользователя, заголовок, текст. 
// При отправке формы выполни POST запрос и отобрази ответ сервера на странице;

// const form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const userId = document.getElementById('id').value;
//     const title = document.getElementById('heading').value;
//     const body = document.getElementById('text').value;

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: title,
//             body: body,
//             userId: userId
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);

//             let postId = document.createElement('p');
//             postId.textContent = `Созданный пост ID: ${data.id}`;
//             document.body.appendChild(postId);

//             let user = document.createElement('p');
//             user.textContent = `Юзер ID: ${data.userId}`;
//             document.body.appendChild(user);

//             let postTitle = document.createElement('p');
//             postTitle.textContent = `Заголовок поста: ${data.title}`;
//             document.body.appendChild(postTitle);

//             let postText = document.createElement('p');
//             postText.textContent = `Текст поста: ${data.body}`;
//             document.body.appendChild(postText);


//         })
//         .catch(error => console.error('Ошибка:', error));
// });


// 2. Реализуй кнопку для загрузки списка постов. При нажатии на кнопку выполни GET запрос к API и отобрази список постов на странице;

// document.getElementById('loadPosts').addEventListener('click', () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(posts => {
//             const postList = document.getElementById('postList');

//             postList.innerHTML = '';
//             posts.forEach(post => {

//                 // отрисовка постов

//                 const postContainer = document.createElement('div');

//                 const idItem = document.createElement('div');
//                 idItem.textContent = 'Post ID: ' + post.id;
//                 const titleItem = document.createElement('p');
//                 titleItem.textContent = 'Title: ' + post.title;
//                 const bodyItem = document.createElement('p');
//                 bodyItem.textContent = 'Text: ' + post.body;

//                 postContainer.appendChild(idItem);
//                 postContainer.appendChild(titleItem);
//                 postContainer.appendChild(bodyItem);

//                 // удалить пост 
//                 const delBtn = document.createElement('button');
//                 delBtn.textContent = 'Удалить';
//                 delBtn.addEventListener('click', () => {
//                     fetch('https://jsonplaceholder.typicode.com/posts/' + post.id, { method: 'DELETE' })
//                         .then(response => {
//                             if (!response.ok) {
//                                 throw new Error('HTTP ' + response.status);
//                             }
//                             postContainer.remove();
//                         })
//                         .catch(error => {
//                             console.error('Ошибка удаления:', error);
//                             alert('Не удалось удалить пост. Попробуй ещё раз.');
//                         });
//                 });
//                 postContainer.appendChild(delBtn);
//                 postList.appendChild(postContainer);
//             });
//         })
//         .catch(error => console.error('Ошибка:', error));
// });

// 3. Создай функцию для удаления поста по id. Выполни DELETE запрос к API и обнови DOM, удалив соответствующий пост;

// Реализовано в задании 2

// 4. Реализуй функциональность для обновления данных пользователя. 
// Используй PUT запрос для отправки обновленных данных на сервер и отобрази обновленный профиль на странице. 
// Объясни, в чём разница между PUT и PATCH запросами.

// PUT - обновляет полностью объект. Но если в объект не включить, например, переменную phone, то сервер удалит её при запросе. 
// PATCH - обновляет только те поля, которые переданы в запросе. 

const form = document.getElementById('updateUserForm');
const profileBox = document.getElementById('userProfile');

// отрисовка 
function renderUserProfile(user) {
    if (!profileBox) {
        return;
    }
    profileBox.innerHTML = '';

    const card = document.createElement('div');

    const h3 = document.createElement('h3');
    h3.textContent = 'Профиль пользователя #' + user.id;

    const nameEl = document.createElement('p');
    nameEl.textContent = 'Name: ' + user.name;

    const emailEl = document.createElement('p');
    emailEl.textContent = 'Email: ' + user.email;

    const phoneEl = document.createElement('p');
    phoneEl.textContent = 'Phone: ' + user.phone;

    card.appendChild(h3);
    card.appendChild(nameEl);
    card.appendChild(emailEl);
    card.appendChild(phoneEl);
    profileBox.appendChild(card);
}

// запрос
async function putUser(id, payload) {
    const url = 'https://jsonplaceholder.typicode.com/users/' + id;
    const res = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(payload)
    });
    if (!res.ok) {
        throw new Error('HTTP ' + res.status);
    }
    const data = await res.json(); // получаем обновлённые данные
    return data;
}

if (form && profileBox) {
    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const id = Number(document.getElementById('uId').value);
        const name = document.getElementById('uName').value;
        const email = document.getElementById('uEmail').value;
        const phone = document.getElementById('uPhone').value;

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Обновляем...';

        try {
            const payload = {
                id: id,
                name: name,
                email: email,
                phone: phone
            };
            const updated = await putUser(id, payload);
            renderUserProfile(updated);
        } catch (error) {
            console.error('Ошибка обновления:', error);
            alert('Не удалось обновить пользователя. Попробуй ещё раз.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}
