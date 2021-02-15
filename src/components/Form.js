import React from 'react'

const Form = ({setNewTodo, newTodo, todos, setTodos}) => {

    const newTodoHandler = (e) => {
        setNewTodo(e.target.value);
    };

    const addTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: newTodo, completed: false, id:Math.random()*1000
            },
        ]);
        setNewTodo("");
    }

    return (
        <div className="newToDo">
            <form> 
                <input onChange={newTodoHandler} type="text" placeholder="Your ToDo.." /> 
                <button onClick={addTodoHandler} > Add ToDo</button>
            </form>
      </div>
    )
}

export default Form;