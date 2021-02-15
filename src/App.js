import './App.css';
import Form from './components/Form'
import ToDoList from './components/ToDoList'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1> My ToDo App </h1>
      </header>
      < Form />
      < ToDoList />
    </div>
  );
}

export default App;
