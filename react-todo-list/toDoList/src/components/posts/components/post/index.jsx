import React from "react";
import './style.css'

export const Post = ({ post, deletePost, selectPost, showDetailPost }) => (
    <div key={post.id} className='posts-item'>
        <span onClick={() => selectPost(post)}>
            {post.title}
        </span>
        <button onClick={() => deletePost(post.id)}>Удалить</button>
        <button onClick={() => showDetailPost(post.id)}>Детальный просмотр</button>
    </div>
)