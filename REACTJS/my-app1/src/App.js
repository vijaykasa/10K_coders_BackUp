import logo from './logo.svg';
import './App.css';
import Classcomponet from './component/classcomponet1';
import ClassComp from './component/classcomponent2';
import ABC, { Childcomp2 } from './component/classcomponent3';
import { Childcomp1 } from './component/classcomponent3';
import Classcomponetobject from './component/classcomponent4';
import Fifth from './component/classcomponent6';
import Classcomponent5 from './component/classcomponent5'
function App() {
  return (
    <div className="App">
    <h1>table data</h1>
    <div className='two_sections'>
    <Childcomp1/>
     <Childcomp2/>
    </div>
     <Classcomponet/>
      <ClassComp/>
      <Classcomponetobject/>
      <Fifth/>
     <ABC/>
    <Classcomponent5/>
    </div>
  );
}

export default App;
