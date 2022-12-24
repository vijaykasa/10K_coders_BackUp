import logo from './logo.svg';
import './App.css';
import Users from './components/users';
import AddUser from './components/addUser';
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Layout from './components/layout';
import Delete from './components/delete';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='/adduser' element={<AddUser/>}/>
          <Route path='/userdata' element={<Users/>}/>
          <Route path='/delete' element={<Delete/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
