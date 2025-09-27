import { TodoList } from './components/toDoList/index.jsx'
import { Posts } from './components/posts/index.jsx'

import './App.css'

export default function App() {
  return (
    <div className='App'>
      <h1 className='tittle'>Посты</h1>
      <div className='wrapper'>
        <TodoList />
        <div className='content'>
          <Posts />
        </div>
      </div>
    </div>
  )
}

