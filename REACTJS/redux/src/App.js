import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Products from './components/products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/cart';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
