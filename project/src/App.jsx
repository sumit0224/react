import React, { useEffect, useState } from 'react'
import Form from '../component/Form'
import TodoList from '../component/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(null);

  const addTodos = (todo) => {

    setTodos([todo, ...todos])

  }

  useEffect(() => {
    console.log(todos)
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  return (
    <div>
      <h1>Todo List</h1>
      <Form addTodo={addTodos} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App