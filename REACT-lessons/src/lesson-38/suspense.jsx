import { Suspense, useState } from 'react';

function fetchData() {
    let data;
    let promise = fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then(json => (data = json));

    return {
        read() {
            if (!data) throw promise; // заставляем Suspense ждать
            return data;
        }
    };
}

function Post() {
    const [resource] = useState(fetchData); 
    const post = resource.read();
    return <h2>{post.title}</h2>;
}

export default function App() {
    return (
        <Suspense fallback={<p>Загрузка поста...</p>}>
            <Post />
        </Suspense>
    );
}
