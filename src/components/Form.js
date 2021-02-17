import React, {useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = ({setNewTodo, newTodo, todos, setTodos}) => {

    const todoRef = useRef();

    const newTodoHandler = (e) => {
        e.preventDefault();

        const inputElement = todoRef.current.value;
        if (inputElement === '') return
        setTodos( todos => { return [ 
            ...todos,
            {
                text: inputElement, completed: false, id: uuidv4()
            },
        ]});
        todoRef.current.value = null;

    }

    return (
        <div className="newToDo">
            <form> 
                <input type="text" placeholder="Your ToDo.." ref={todoRef} /> 
                <button onClick={newTodoHandler} > Add ToDo</button>
            </form>
      </div>
    )
}

export default Form;