import "./App.css";
import ABC, { ChildClass, ParentClass } from "./ClassComponents/TaskClass1";
import ABC2, { ChildClass2, ParentClass2 } from "./ClassComponents/TaskClass2";
import ABC3, { ChildClass3, ParentClass3 } from "./ClassComponents/TaskClass3";
import ABC4, { ChildClass4, ParentClass4 } from "./ClassComponents/TaskClass4";
import ABC5, { ChildClass5, ParentClass5 } from "./ClassComponents/TaskClass5";
import Mainfunc1, { Childfunc1, Parentfunc1 } from "./FunctionalComponents/TaskFunc1";
import Mainfunc2, { Childfunc2, Parentfunc2 } from "./FunctionalComponents/TaskFunc2";
import Mainfunc3, { Childfunc3, Parentfunc3 } from "./FunctionalComponents/TaskFunc3";
import Mainfunc4, { Childfunc4, Parentfunc4 } from "./FunctionalComponents/TaskFunc4";
import Mainfunc5, { Childfunc5, Parentfunc5 } from "./FunctionalComponents/TaskFunc5";
function App() {
  return (
    <div className="App">
    <div>
    <ABC />
      <ChildClass />
      <ParentClass />
    </div>
    <div>
    <ABC2 />
      <ChildClass2 />
      <ParentClass2 />
    </div>
    <div>
    <ABC3 />
      <ChildClass3 />
      <ParentClass3 />
    </div>
    <div>
    <ABC4 />
      <ChildClass4 />
      <ParentClass4 />
    </div>
    <div>
    <ABC5 />
      <ChildClass5 />
      <ParentClass5 />
    </div>
    <div>
    <Mainfunc1 />
      <Childfunc1 />
      <Parentfunc1 />
    </div> 
    <div>
    <Mainfunc2 />
      <Childfunc2 />
      <Parentfunc2 />
    </div> 
    <div>
    <Mainfunc3 />
      <Childfunc3 />
      <Parentfunc3 />
    </div> 
    <div>
    <Mainfunc4 />
      <Childfunc4 />
      <Parentfunc4 />
    </div> 
    <div>
    <Mainfunc5 />
      <Childfunc5 />
      <Parentfunc5 />
    </div> 
      
      
    
     
  
      
    </div>
  );
}

export default App;
