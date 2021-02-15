import React from 'react'

const Todo = ({text}) => {
    return (
        <div className="toDo">
            <li className="toDoItem"> 
                <input type='checkbox'/> 
                {text}
                <hr /> 
            </li>
        </div>
    )
}

export default Todo;