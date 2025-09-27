import React, { useState, useEffect } from 'react';
import { Info } from './components/info/index.jsx'
import { Comments } from './components/comments/index.jsx'

export const DetailPost = ({ postId }) => {
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => response.json())
            .then((post) => setPost(post));

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((response) => response.json())
            .then((comments) => setComments(comments));
    }, [postId])

    return (
        <>
            {post && <Info post={post} />}
            {comments && <Comments comments={comments} />}
        </>
    )
} 