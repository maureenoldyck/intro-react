import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({todos}) => {

    return (
        <div>
            <ul>
                < ToDo todos={todos} />
            </ul>
        </div>
    );
}

export default ToDoList;