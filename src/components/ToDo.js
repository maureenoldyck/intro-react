import React  from 'react'

const Todo = ({todos}) => {

    const completeHandler = () => {
    
    }

    return (
        <div> 
            {todos.map((todo) =>
            <li>
                <input onChange={completeHandler} className=" " type='checkbox' />
                {todo}
            </li>
            )}
        </div>
    )
}

export default Todo;