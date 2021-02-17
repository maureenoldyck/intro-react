import React, {useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = ({setTodos}) => {
    const inputRef = useRef();

    const addTodoHandler = (e) => {
        e.preventDefault();
        const inputElement = inputRef.current.value;
        setTodos( todos => { return [
            ...todos,
            {
                text:  inputElement,
                completed: false,
                id: uuidv4()
            }
        ]})
        inputRef.current.value = null;
    }

    return (
        <form>
            <input type='text' placeholder='Your Todo' ref={inputRef}></input>
            <button onClick={addTodoHandler}> Add Todo </button>
        </form>
    );
}

export default Form;