import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login'  element={<Login/>}/>
    </Routes>

    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
