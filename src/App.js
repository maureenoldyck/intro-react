import './App.css';
import React, { useState } from 'react';
import Form from './components/Form'
import ToDoList from './components/ToDoList'


const App = () => {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");


  return (

    <div className='App'> 
      <header className='App-header'>
        <h1> Your Todo App </h1>
      </header>
        <div className='content'>
          <Form todos={todos} setTodos={setTodos} newTodo={newTodo} setNewTodo={setNewTodo}/>
          <ToDoList todos={todos} setTodos={setTodos}  />
        </div>
        <footer className="footer" > {todos.filter(todo => !todo.completed).length} ToDo's left to do! </footer>
    </div>
  );
}

export default App;
