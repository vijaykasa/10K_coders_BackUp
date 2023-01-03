import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import TodolistTable from './components/TodolistTable';

function App() {
  return (
    <div className="App">
     <ToDoList/>
     <TodolistTable/>
    </div>
  );
}

export default App;
