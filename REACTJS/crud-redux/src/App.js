import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import TodolistTable from './components/TodolistTable';
import Test from './components/test';

function App() {
  return (
    <div className="App">
     <ToDoList/>
     <TodolistTable/>
     <Test/>
    </div>
  );
}

export default App;
