
import './App.css';
import Students from './components/displayData';
import Conditions from './components/conditions';
import Conditonbasedrendering from './components/conditonbasedrendering';
import Changevaluesinstate from './components/changevaluesinstate';
import Parentcomponent from './components/parentcomponent';

function App() {
  return (
    <div className="App">
      {/* <Students/> */}
      <Conditions/>
      <Conditonbasedrendering/>
      <Changevaluesinstate/>
      <Parentcomponent/>
    </div>
  );
}

export default App;
