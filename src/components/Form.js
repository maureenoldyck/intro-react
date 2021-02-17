import React, {useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = ({setNewTodo, newTodo, todos, setTodos}) => {

    const inputRef = useRef();

    const newTodoHandler = () => {
        const inputElement = inputRef.current;
        setNewTodo(inputElement);
    };

    const addTodo = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: newTodo, completed: false, id: uuidv4()
            },
        ]);
        setNewTodo("");
    }

    return (
        <div className="newToDo">
            <form> 
                <input onChange={newTodoHandler} type="text" placeholder="Your ToDo.." value={newTodo} ref={inputRef} /> 
                <button onClick={addTodo} > Add ToDo</button>
            </form>
      </div>
    )
}

export default Form;