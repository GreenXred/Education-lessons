//1. Реализовать кнопку для уменьшения счетчика (Counter из урока). Сделать так, чтобы нельзя было уменьшить в минус. Т.е. 0 и все, ниже нельзя. 
// Если количество равное 0 необходимо показать красный текст с надписью "Пожалуйста, измените количество, оно не может быть равно 0;

import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(5);

    function decrease() {
        setCount((prevState) => (prevState > 0 ? prevState - 1 : 0));
    }

    return (
        <div>
            <button onClick={decrease}>Count: {count}</button>
            <div>
                <p style={{
                    color: count === 0 ? "red" : "black",
                    visibility: count === 0 ? "visible" : "hidden"
                }}>
                    Пожалуйста, измените количество, оно не может быть равно 0
                </p>
            </div>
        </div>
    );
}

// export default Counter;

//2. По аналогии со вторым примером сделать кнопку получения конкретного поста. На странице должно быть поле ввода ID поста. 
// При клике на кнопку, нужно взять этот ID из поля, получить по нему данные и показать их на странице.

const arrayPost = [
    {
        id: 1,
        title: "Post 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        userId: 1
    },
    {
        id: 2,
        title: "Post 2",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        userId: 2
    },
    {
        id: 3,
        title: "Post 3",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        userId: 3
    }
];

function GetPost() {
    const [post, setPost] = useState(null);
    const [postId, setPostId] = useState("");

    const changePost = () => {
        const found = arrayPost.find((item) => item.id === Number(postId));
        setPost(found || null);
    };
    return (
        <div>
            <input style={{ width: "200px" }}
                type="number"
                value={postId}
                placeholder="Введите ID поста (только 1-3)"
                onChange={(event) => setPostId(event.target.value)}
            />
            <button onClick={changePost}>Найти пост</button>

            {post ? (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <p>Пользователь: {post.userId}</p>
                </div>
            ) : (
                <p>Пост не найден</p>
            )}
        </div>
    );
}

export default GetPost;