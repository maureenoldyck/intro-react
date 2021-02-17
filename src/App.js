import './App.css';
import React, {useState, useEffect } from 'react';
import Form from './components/Form'
import ToDoList from './components/ToDoList'


const LOCAL_STORAGE_KEY = "TodoApp";

const App = () => {

  const [todos, setTodo] = useState([])
  // const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodo(storedTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);


  return (  

    <div className='App'> 
      <header className='App-header'>
        <h1> Your Todo App </h1>
      </header>
        <div className='content'>
          <Form todos={todos} setTodo={setTodo} />
          <ToDoList todos={todos} setTodo={setTodo} />
        </div>
        <footer className="footer" > {todos.filter(todos => !todos.completed).length} ToDo's left to do! </footer>
    </div>
  );
}

export default App;
