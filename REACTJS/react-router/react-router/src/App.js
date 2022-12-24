import logo from './logo.svg';
import './App.css';
import Navbar from './function components/Navbar';
import { Routes,Route,Outlet,Link,BrowserRouter  } from 'react-router-dom'
import Home from './function components/Home';
import AboutUs from './function components/AboutUs';
import Features from './function components/Features';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Features' element={<Features/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
