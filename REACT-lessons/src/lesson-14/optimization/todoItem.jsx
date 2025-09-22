const TodoItem = ({ id, text, onDelete }) => {
    console.log(`Рендер задачи: ${text}`);
    return (
        <div>
            <p>{text}</p>
            <button onClick={() => onDelete(id)}>Удалить</button>
        </div>
    );
};

export default React.memo(TodoItem)