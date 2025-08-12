// Задание 1. Сделай HTML форму для создания нового поста с полями id пользователя, заголовок и текст.
// При отправке формы выполни Post запрос и отобрази ответ сервера на странице.


// document.getElementById('postForm').addEventListener('submit', (event) => {
//     event.preventDefault();

//     const userId = document.getElementById('userId').value;
//     const title = document.getElementById('title').value;
//     const body = document.getElementById('body').value;

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ userId, title, body })
//     })
//     .then(response => response.json())
//     .then(data => {
//         const postDiv = document.getElementById('post');
//         postDiv.innerHTML = `
//             <p>userId: ${data.id}</p>
//             <p>Заголовок: ${data.title}</p>
//             <p>Текст: ${data.body}</p>
//         `;
//     });
// });


// Задание 2. Реализуй кнопку для загрузки списка постов. При нажатии на кнопку выполни Get запрос к API и отобрази список постов на странице.

// const button = document.getElementById('loadPostsButton');
// const list = document.getElementById('postsList');

// button.addEventListener('click', async () => {
//     const originalText = button.textContent;   // запоминаем исходный текст
//     button.disabled = true;                    // блокируем от повторных кликов
//     button.textContent = 'Загружаем…';         // показываем статус

//     try {
//         // очищаем список перед новой загрузкой
//         list.innerHTML = '';

//         // делаем запрос
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
//         if (!res.ok) throw new Error('HTTP ' + res.status); // 

//         const posts = await res.json();

//         // наполняем список
//         for (const post of posts) {
//             const li = document.createElement('li');
//             li.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
//             list.appendChild(li);
//         }

//     } catch (err) {
//         list.innerHTML = '<li>Не удалось загрузить посты. Попробуйте ещё раз.</li>';
//         console.error(err);
//     } finally {
//         button.textContent = originalText;       // возвращаем текст
//         button.disabled = false;                 // разблокируем
//     }
// });

// Задание 3. Создай функцию для удаления поста по id. Выполни Delete запрос к API и обнови DOM, удалив соответсвующий пост.

// Ссылки на элементы
const btn = document.getElementById('loadPostsBtn');
const list = document.getElementById('postsList');

// Рендер списка постов
function renderPosts(posts) {
  list.innerHTML = '';
  const frag = document.createDocumentFragment();

  for (const post of posts) {
    const li = document.createElement('li');
    li.dataset.id = post.id;
    li.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Удалить';
    delBtn.addEventListener('click', () => deletePost(post.id));

    li.appendChild(delBtn);
    frag.appendChild(li);
  }
  list.appendChild(frag);
}

// Удаление поста по id (DELETE + обновление DOM)
async function deletePost(id) {
  if (!confirm('Удалить этот пост?')) return;

  const li = list.querySelector(`li[data-id="${id}"]`);
  const btn = li?.querySelector('button');

  try {
    if (btn) { btn.disabled = true; btn.textContent = 'Удаляем…'; }

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);

    li?.remove();
  } catch (err) {
    console.error(err);
    alert('Не удалось удалить пост. Попробуйте ещё раз.');
    if (btn) { btn.disabled = false; btn.textContent = 'Удалить'; }
  }
}

// Загрузка постов по кнопке (GET + состояния кнопки)
btn.addEventListener('click', async () => {
  const originalText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Загружаем…';

  try {
    list.innerHTML = '';
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    if (!res.ok) throw new Error('HTTP ' + res.status);

    const posts = await res.json();
    renderPosts(posts);
  } catch (err) {
    console.error(err);
    list.innerHTML = '<li>Не удалось загрузить посты. Попробуйте ещё раз.</li>';
  } finally {
    btn.textContent = originalText;
    btn.disabled = false;
  }
});
