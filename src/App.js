import './App.css';
import React from 'react';
import Form from './components/Form'
import ToDoList from './components/ToDoList'


const App = () => {

  return (

    <div className='App'> 
      <header className='App-header'>
        <h1> Your Todo App </h1>
      </header>
        <div className='content'>
          <Form />
          <ToDoList />
        </div>
    </div>
  );
}

export default App;
