import React, { useState, useEffect } from 'react';
import { ManagePost } from '../managePost';
import { Post } from './components/post/index.jsx';
import { DetailPost } from '../detailPost/index.jsx';
import { Pagination } from '../pagination/index.jsx';
import './style.css'

export const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null)
    const [postForDetailView, setPostForDetailView] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [userId, setUserId] = useState(1)

    const pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const addNewPost = (post) => {
        setPosts([...posts, post])
    }

    const editPost = (post) => {
        const editedPosts = posts.map((oldPost) => {
            if (oldPost.id === post.id) {
                return post
            }
            return oldPost
        })
        setPosts(editedPosts)
    }

    const selectPost = (post) => {
        setSelectedPost(post)
        setPostForDetailView(null)
    }

    const showDetailPost = (postId) => {
        setSelectedPost(null)
        setPostForDetailView(postId)
    }

    const changeUserId = (e) => {
        setUserId(e.target.value)
    }

    const deletePost = (postId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE',
        }).then(() => {
            setPosts(posts.filter((item) => item.id !== postId))
        });
    }

    const changePage = (page) => {
        setCurrentPage(page)
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&userId=${userId}&_limit=5`)
            .then(response => response.json())
            .then(posts => setPosts(posts));
    }, [currentPage, userId])

    return (

        <div>
            <div className='posts'>
                {
                    posts.map((post) =>
                        <Post
                            key={post.id}
                            deletePost={deletePost}
                            post={post}
                            selectPost={selectPost}
                            showDetailPost={showDetailPost}
                        />)
                }
            </div>
            <h2>Filter</h2>
            <input type="text" placeholder='userId' value={userId} onChange={changeUserId} />
            <Pagination currentPage={currentPage} pagination={pagination} changePage={changePage} />
            {!postForDetailView && <ManagePost addNewPost={addNewPost} selectedPost={selectedPost} editPost={editPost} />}
            {postForDetailView && !selectedPost && <DetailPost postId={postForDetailView} />}
        </div >
    )
}