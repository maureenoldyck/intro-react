import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({todos, setTodo}) => {

    const clearTodos = () => {
        setTodo(todos.filter(todos => todos.completed === false));
    }

    return (
        <div>
            <ul>
                {todos.map((todo) => 
                    <ToDo key={todo.id} todo={todo} todos={todos} setTodo={setTodo} />
                )} 
            </ul>
            <button onClick={clearTodos}> Clear finished Todo's </button>
        </div>
    );
}

export default ToDoList;