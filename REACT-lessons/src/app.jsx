import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './lesson-24/layout.jsx';
import About from './lesson-24/pages/about/about.jsx';
import Posts from './lesson-24/pages/posts/posts.jsx';
import Feedback from './lesson-24/pages/feedback/feedback.jsx';


const router = createBrowserRouter([
    {
        path: '/',               // корневой путь
        element: <Layout />,     // обёртка с навигацией
        children: [              // дочерние маршруты
            {
                index: true,         // это путь "/"
                element: <About />
            },
            {
                path: 'posts',
                element: <Posts />
            },
            {
                path: 'feedback',
                element: <Feedback />
            }
        ]
    }
]);

export default function App() {
    return <RouterProvider router={router} />;
}