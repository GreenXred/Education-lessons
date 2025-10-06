export default function Admin({ onLogout }) {
    return (
        <div>
            <h2>👤 Управление</h2>
            <button onClick={onLogout}>Выйти</button>
        </div>
    );
}