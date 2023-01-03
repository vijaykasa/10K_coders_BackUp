import "./App.css";
import { AuthProvider } from "./component/Auth";
import Navbar from "./component/navbar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Loginpage from "./component/loginpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <h3>hello from auth project</h3>
          <Routes>
            <Route path="/login" element={<Loginpage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
