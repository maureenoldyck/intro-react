import React, {useRef}  from 'react'

const Todo = ({todo, todos, setTodo}) => {
    

    const editInput = useRef();


    const completeHandler = () => {
        setTodo(todos.map((toggleTodo) => {
            if (toggleTodo.id === todo.id)  {
                return {
                    ...toggleTodo, 
                    completed: !toggleTodo.completed,
                }
            }
            return toggleTodo;
        }))
    }

    const saveEditTodo = () => {
        setTodo(todos.map((editTodo) => {
            if (editTodo.id === todo.id)  {
                return {
                    ...editTodo, 
                    text: editInput.current.value, 
                    edit: !editTodo.edit,
                }
            }
            return editTodo;
        }))
    }


    const editTodo = () => {

        setTodo(todos.map((editTodo) => {
            if (editTodo.id === todo.id)  {
                return {
                    ...editTodo, 
                    edit: !editTodo.edit,
                }
            }
            return editTodo;
        }))
        
    }

    const deleteTodo = () => {
        setTodo(todos.filter((deleteTodo) => todo.id !== deleteTodo.id));
    }

    return (
        <li className={`listItem ${todo.completed ? "completed" : ""}`}>
            <input onClick={completeHandler} type='checkbox'/>
            {todo.edit 
                ? <input type='text' placeholder={todo.text} ref={editInput} />
                : `${todo.text}`
            }
            {todo.edit 
                ? <button onClick={saveEditTodo}> Save edit </button>
                : <button onClick={editTodo}> edit </button>
            }
            <button onClick={deleteTodo}> delete </button>
            <hr />
        </li>         
    )
}

export default Todo;