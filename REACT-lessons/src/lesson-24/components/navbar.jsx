import { NavLink } from 'react-router-dom';
import './navbar.css';

const link = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" end className={link}>Про меня</NavLink>
            <NavLink to="/posts" className={link}>Лента постов</NavLink>
            <NavLink to="/feedback" className={link}>Обратная связь</NavLink>
        </nav>
    );
}