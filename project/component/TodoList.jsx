import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {
    if(todos.length === 0){
        return <p>No todos found</p>
    }
  return (
    <div>
      {todos.map((todo,index)=>(
        <TodoItem key={index} todo={todo}/>
      ))}
    </div>
  )
}

export default TodoList