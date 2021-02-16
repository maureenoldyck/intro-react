import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({todos, setTodos}) => {

    const clearFinishedTodos = () => {
        setTodos(todos.filter(element => element.completed === false))
    }

    return (
        <div className='listContainer'>
            <h3> ToDo's: </h3>
            <ul>
                {todos.map((todo) => (
                    <ToDo key={todo.id} todos={todos} setTodos={setTodos} todo={todo} />
                ))}
            </ul>
            <button onClick={clearFinishedTodos}> Clear finished Todo's </button>
        </div>
    )
}

export default ToDoList;