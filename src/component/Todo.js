import React from 'react'
import Todolist from './Todolist'

const Todo = ({todo,dispatch}) => {
  return (
    <div>
        <span style={{textDecoration: todo.complete ? "line-through" : null}}>{todo.todoContent}</span>
        <button className='toggle' onClick={() => {dispatch({type:"TOGGLE", payload:{id: todo.id}})}}>{todo.complete?"Cancel":"Complete"}</button>
        <button className='delete' onClick={() => {
            dispatch({type: 'DELETE', payload:{id: todo.id}})
        }}>Delete</button>
    </div>
  )
}

export default Todo