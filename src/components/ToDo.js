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

    const editTodo = () => {

    

    }

    const deleteTodo = () => {

        setTodo(todos.filter((deleteTodo) => todo.id !== deleteTodo.id));

    }

    return (
        <li className={`listItem ${todo.completed ? "completed" : ""}`}>
            <input onClick={completeHandler} type='checkbox'/>
            {todo.text}
            <button onClick={editTodo}> edit </button>
            <button onClick={deleteTodo}> delete </button>
            <hr />
        </li>         
    )
}

export default Todo;