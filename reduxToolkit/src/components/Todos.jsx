//import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    
  return (
    
     <ul className="space-y-2">
    <div>Todos</div>
    {todos.map((todo) => (
        <li key={todo.id}>
            {todo.text}
        
        <button
        onClick = {() => dispatch(removeTodo(todo.id))}></button>
        </li>
    ))}
    </ul>
    
  )
}

export default Todos