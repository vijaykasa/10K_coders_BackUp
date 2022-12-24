import logo from "./logo.svg";
import "./App.css";
import Users from "./components/users";
import AddUser from "./components/creteuser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Delete from "./components/delete";
import Navbar from "./components/Navbar";
import Edit from "./components/edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Users />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/delete/:id" element={<Delete />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
