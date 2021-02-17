import React  from 'react'

const Todo = ({todo, todos, setTodo}) => {

    const completeHandler = () => {
        setTodo(todos.map((toggleTodo) => {
            if (toggleTodo.id === todo.id)  {
                return {
                    ...toggleTodo, completed: !toggleTodo.completed,
                }
            }
            return toggleTodo;
        }))
    }

    return (
        <li onClick={completeHandler} className={`listItem ${todo.completed ? "completed" : ""}`}>
            {todo.text}
            <button> edit </button>
            <button> delete </button>
            <hr />
        </li>         
    )
}

export default Todo;