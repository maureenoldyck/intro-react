import React from 'react'

const ToDoList = () => {
    return (
        <div className='listContainer'>
            <h3> ToDo's: </h3>
            <ul className='listItem'>
                <li> 
                    <input type='checkbox'/> 
                    Todo 1 
                </li>
                <li> 
                    <input type='checkbox'/> 
                    Todo 2
                </li>
                <li> 
                    <input type='checkbox'/> 
                    Todo 3
                </li>
            </ul>
        </div>
    )
}

export default ToDoList;