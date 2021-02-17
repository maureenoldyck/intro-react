import React, {useState}  from 'react'

const Todo = () => {

    const initialTodos = ["my first todo", "my second todo"]
    const [todos, setTodos] = useState(initialTodos)

    return (
        <div> 
            {todos.map((todo) =>
            <li>
                <input type='checkbox' />
                {todo}
            </li>
            )}
        </div>
    )
}

export default Todo;