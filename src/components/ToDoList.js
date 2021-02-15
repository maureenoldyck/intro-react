import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({todos}) => {
    return (
        <div className='listContainer'>
            <h3> ToDo's: </h3>
            <ul className='listItem'>
                {todos.map((todo) => (
                    <ToDo key={todo.id} text={todo.text} />
                ))}
            </ul>
            <button> Clear finished Todo's </button>
        </div>
    )
}

export default ToDoList;