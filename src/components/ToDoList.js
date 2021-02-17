import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({todos, setTodos}) => {

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    < ToDo todos={todos} setTodos={setTodos} todo={todo} key={todo.id}/>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;