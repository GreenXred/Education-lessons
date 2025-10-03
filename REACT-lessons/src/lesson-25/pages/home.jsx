import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <button style={{ display: "flex", justifyContent: "center"}} onClick={() => navigate('/posts')}>
            Перейти к постам
        </button>
    );
}