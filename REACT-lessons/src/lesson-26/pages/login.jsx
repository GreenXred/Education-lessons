import { useNavigate } from 'react-router-dom';

export default function Login({ setIsAuth, setIsAdmin }) {
    const navigate = useNavigate();

    const UserLogin = () => {
        setIsAuth(true);
        setIsAdmin(false);
        navigate('/profile');
    };

    const AdminLogin = () => {
        setIsAuth(true);
        setIsAdmin(true);
        navigate('/admin');
    }

    return (
        <div>
            <h2>Вход</h2>
            <button style={{marginRight: 10}} onClick={UserLogin}>Войти как пользователь</button>
            <button onClick={AdminLogin}>Войти как администратор</button>
        </div>
    );
}