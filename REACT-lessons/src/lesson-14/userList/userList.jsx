import User from './user.jsx';


export default function UserList(props) {
    const users = props.users;

    return (
        <ul>
            {users.map(function (u) {
                return (
                    <User
                        key={u.id}
                        name={u.name}
                        phone={u.phone}
                        email={u.email}
                    />
                );
            })}
        </ul>
    );
}
