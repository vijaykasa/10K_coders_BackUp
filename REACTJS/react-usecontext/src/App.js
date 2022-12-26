import logo from './logo.svg';
import './App.css';
import Main from './component/main';
import Parent from './component/Parent';
import { AuthProvider } from './component/Auth';
import Login from './component/useContext';

function App() {
  return (
    <div className="App">
      <Parent/>
      <hr/>
      <AuthProvider>
      <h3>hello from auth project</h3>
      <Login/>
     </AuthProvider>
      
    </div>
  );
}

export default App;
