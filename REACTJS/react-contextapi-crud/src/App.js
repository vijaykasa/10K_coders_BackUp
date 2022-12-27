
import "./App.css";
import Layout from "./layout";
import { BrowserRouter, Routes,Route, Link } from "react-router-dom";
import Form from "./components/form";
import TableData from "./components/tableData";

function App() {
  return (
    <div className="App">
      <h1>data from context api</h1>
      
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
             <Route index element={<TableData/>}/>
             <Route path="/adduser"  element={<Form/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
