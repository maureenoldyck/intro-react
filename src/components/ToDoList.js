import React from 'react'

const ToDoList = () => {
    return (
        <div className='listContainer'>
            <h3> ToDo's: </h3>
            <ul className='listItem'>
                <li> 
                    <input type='checkbox'/> 
                    Todo 1
                    <hr /> 
                </li>
                <li> 
                    <input type='checkbox'/> 
                    Todo 2
                    <hr /> 
                </li>
                <li> 
                    <input type='checkbox'/> 
                    Todo 3
                    <hr /> 
                </li>
            </ul>
        </div>
    )
}

export default ToDoList;