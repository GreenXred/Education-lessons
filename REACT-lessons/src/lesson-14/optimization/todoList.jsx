import React, { useState, useCallback } from 'react';
import TodoItem from './todoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Изучить React' },
        { id: 2, text: 'Написать проект' },
    ]);


    const addTodo = useCallback(() => {
        const newTodo = { id: todos.length + 1, text: 'Новая задача' };
        setTodos([...todos, newTodo]);
    }, []);


    const deleteTodo = useCallback((id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }, []);


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