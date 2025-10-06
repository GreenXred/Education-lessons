import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';

import Home from './lesson-26/pages/home';
import Login from './lesson-26/pages/login';
import Profile from './lesson-26/pages/profile';
import Admin from './lesson-26/pages/admin';
import ProtectedRoute from './lesson-26/components/protectedRoute';
import NotFound from './lesson-26/pages/notFound';
import Layout from './lesson-26/layout';

export default function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                {
                    path: 'profile',
                    element: (
                        <ProtectedRoute isAuth={isAuth}>
                            <Profile onLogout={() => { setIsAuth(false), setIsAdmin(false);}} />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: 'admin',
                    element: (
                        <ProtectedRoute isAuth={isAuth} isAdmin={isAdmin} adminOnly>
                            <Admin onLogout={() => { setIsAuth(false); setIsAdmin(false); }} />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: 'login',
                    element:
                        <Login
                            setIsAuth={setIsAuth}
                            setIsAdmin={setIsAdmin}
                        />,
                },
                {
                    path: '*',
                    element: <NotFound />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}