import React, {useRef}  from 'react'
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineSave } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';



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

        if (editInput.current.value === null | editInput.current.value === '') return editTodo;

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
                ? <button className="smallButton" onClick={saveEditTodo}> <AiOutlineSave/> </button>
                : <button className="smallButton" onClick={editTodo}> <AiOutlineEdit/> </button>
            }
            <button className="smallButton" onClick={deleteTodo}> <AiOutlineDelete/> </button>
            <hr />
        </li>         
    )
}

export default Todo;