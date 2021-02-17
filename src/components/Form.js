import React, {useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = ({newTodo, setNewTodo, todos, setTodos}) => {
    const inputRef = useRef();

    const addTodoHandler = (e) => {
        e.preventDefault();
        const inputElement = inputRef.current;
        setTodos([
            ...todos,
            {
                text:  inputElement.value,
                key: uuidv4()
            }
        ])
        inputElement.value = null;
    }

    return (
        <form>
            <input type='text' placeholder='Your Todo' ref={inputRef}></input>
            <button onClick={addTodoHandler}> Add Todo </button>
        </form>
    );
}

export default Form;