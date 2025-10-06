import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ isAuth, isAdmin, adminOnly = false, children }) {
    if (!isAuth) {
        return <Navigate to="/login" replace />; // если пользователь не авторизован, то перенаправляем на страницу логина
    }

    if (adminOnly && !isAdmin) {
        return <Navigate to="/profile" replace />; // //  маршрут только для админа, но пользователь не админ — роутинг на профиль
    }
    return children;  // если пользователь авторизован, то отрисовываем дочерний элемент
}