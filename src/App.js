import './App.css';
import React, {useState} from 'react';
import Form from './components/Form'
import ToDoList from './components/ToDoList'

const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h1> My ToDo App </h1>
      </header>
      < Form newTodo={newTodo} todos={todos} setTodos={setTodos} setNewTodo = {setNewTodo} />
      < ToDoList todos={todos} />
    </div>
  );
}

export default App;
