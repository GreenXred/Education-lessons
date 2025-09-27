import React from 'react'

export const TodoItem = ({ todo, onCompleted }) => (
    <div key={todo.id}>
        <i>{todo.name}</i>
        <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={(event) => onCompleted({
            ...todo,
            completed: event.target.checked 
        }
        )} />
    </div>
)