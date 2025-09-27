import React from 'react';

export const Comments = ({ comments }) => <>
    <h2>Comments</h2>
    {
        comments.map((comment) => <div key={comment.id}>
            <div>Title - {comment.name}</div>
            <div>Text - {comment.body}</div>
            <div>User email - {comment.email}</div>
        </div>)
    }
</>
