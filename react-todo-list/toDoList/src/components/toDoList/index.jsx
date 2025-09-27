import React, { useState, useEffect } from "react"
import { TodoItem } from "./components/todoItem/index.jsx"

const TODO_LIST = [
    {
        id: 1,
        name: "Создать Todo List",
        completed: false
    },
    {
        id: 2,
        name: "Получение списка постов",
        completed: false
    },
    {
        id: 3,
        name: "Вывод постов на страницу",
        completed: false
    },
    {
        id: 4,
        name: "Создание поста",
        completed: false
    },
    {
        id: 5,
        name: "Удаление поста",
        completed: false
    },
    {
        id: 6,
        name: "Редактирование поста",
        completed: false
    },
    {
        id: 7,
        name: "Изменение поста",
        completed: false
    },
    {
        id: 8,
        name: "Пагинация постов",
        completed: false
    },
    {
        id: 9,
        name: "Фильтрация по userId",
        completed: false
    },
    {
        id: 10,
        name: "Детальная страница поста",
        completed: false
    },
    {
        id: 11,
        name: "Комментарии к посту на детальной странице",
        completed: false
    }
]
const TODOS_KEY = "todos"

export const TodoList = () => {
    const [todos, setTodos] = useState([])

    const onToggleCompleted = (todo) => {
        const updatedTodos = todos.map((oldTodo) => {
            if (oldTodo.id === todo.id) {
                return {
                    ...oldTodo,
                    completed: todo.completed
                }
            }
            return oldTodo
        })

        localStorage.setItem(TODOS_KEY, JSON.stringify(updatedTodos))

        setTodos(updatedTodos)
    }


    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem(TODOS_KEY))
        setTodos(savedTodos || TODO_LIST)
    }, [])

    return (
        <>
            <h1>Todo List</h1>
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onCompleted={onToggleCompleted } />
                ))
            }
        </>
    )
}