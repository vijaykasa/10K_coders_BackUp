import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from './component/Layout';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Creat from './component/Creat';
import Delete from './component/Delete';
import Edit from './component/Edit';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/create" element={<Creat/>}/>
            <Route path="/delete/:id"  element={<Delete/>}/>
            <Route path="/edit/:id"  element={<Edit/>}/>
          </Route>
        </Routes>
       </BrowserRouter>      
    </div>
  );
}

export default App;
