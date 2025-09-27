import React from 'react';

export const Info = ({ post }) => {
    return (
        <div>
            <h1>Detail Post - {post.id}</h1>
            <div>Title - {post.title}</div>
            <div>Text - {post.body}</div>
            <div>User id - {post.userId}</div>
        </div>
    )
}