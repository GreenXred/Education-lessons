import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import React from "react";
import Home from "./lesson-25/pages/home.jsx";
import GetPosts from "./lesson-25/pages/posts.jsx";
import Post from "./lesson-25/pages/post.jsx";

const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/home" replace /> },
    { path: "/home", element: <Home /> },
    { path: "/posts", element: <GetPosts /> },
    {
        path: "/posts/:id",
        element: <Post />,
        errorElement: <h2>Что-то пошло не так 😢</h2>,
    },
    { path: "*", element: <div>Страница не найдена!</div> },
]);

export default function App() {
    return <RouterProvider router={router} />;
}