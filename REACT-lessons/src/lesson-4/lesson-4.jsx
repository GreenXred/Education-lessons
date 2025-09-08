//1. Создай компонент `UserCard`, который принимает через пропсы имя пользователя (`name`) и его возраст (`age`).
//2. Используй компонент `UserCard` в `App`, чтобы отобразить трёх разных пользователей. Пример вызова:

//<UserCard name="Мария" age={25} />

function UserCard({ name, age }) {
    return (
    <div>
        <p>{name}</p>
        <p>{age}</p>
    </div>
    );
}

function App() {
    return (
        <div>
            <UserCard name = "Мария" age = {25}/>
            <UserCard name = "Александр" age = {30}/>
            <UserCard name = "Алексей" age = {20}/>
        </div>
    );
}

export default App;