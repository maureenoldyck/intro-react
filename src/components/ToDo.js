import React  from 'react'

const Todo = ({todo, todos, setTodos}) => {

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    }

    return (
        <li className={`listItem ${todo.completed ? "completed" : ""}`}>
                <input onChange={completeHandler} type='checkbox' />
                {todo.text}
                <hr />
        </li>
             
    )
}

export default Todo;