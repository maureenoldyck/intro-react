import React, {useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = ({todos, setTodo}) => {

    const todoInput = useRef();

    const addTodoHandler = (e) => {
        e.preventDefault();
        setTodo([
            ...todos, 
            {
                text: todoInput.current.value,
                id: uuidv4(),
                completed: false,
            }
        ])
        todoInput.current.value = null;
    }


    return (
        <form>
            <input type='text' placeholder='Your Todo' ref={todoInput} ></input>
            <button onClick={addTodoHandler}> Add Todo </button>
        </form>
    );
}

export default Form;