import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './components/Form'
import ToDoList from './components/ToDoList'

const LOCAL_STORAGE_KEY = 'todoApp.todos';

const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedTodos) setTodos(storedTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  return (
    <div className="App">
      <header className="App-header">
        <h1> My ToDo App </h1>
      </header>
      <div className="content"> 
        < Form newTodo={newTodo} todos={todos} setTodos={setTodos} setNewTodo = {setNewTodo} />
        < ToDoList todos={todos} setTodos={setTodos}/>
      </div>
      <footer className="footer" > {todos.filter(todo => !todo.completed).length} ToDo's left to do! </footer>
    </div>
  );
}

export default App;
