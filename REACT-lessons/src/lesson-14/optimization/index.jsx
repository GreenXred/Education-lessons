// Оптимизируй все, что можешь в коде из урока 😄 

import React, { useState } from 'react';

const TodoItem = ({ id, text, onDelete }) => {
    console.log(`Рендер задачи: ${text}`);
    return (
        <div>
            <p>{text}</p>
            <button onClick={() => onDelete(id)}>Удалить</button>
        </div>
    );
};


const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Изучить React' },
        { id: 2, text: 'Написать проект' },
    ]);


    const addTodo = () => {
        const newTodo = { id: todos.length + 1, text: 'Новая задача' };
        setTodos([...todos, newTodo]);
    };


    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };


    return (
        <div>
            <button onClick={addTodo}>Добавить задачу</button>
            {todos.map((todo) => (
                <TodoItem key={todo.id} id={todo.id} text={todo.text} onDelete={deleteTodo} />
            ))}
        </div>
    );
};


export default TodoList;