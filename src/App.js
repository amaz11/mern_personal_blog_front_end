// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ErrorPage from "./Components/ErrorPage";
import Logout from "./Components/Logout";
import { createContext, useReducer } from "react";
import { reducer, initalState } from "./reducer/useReducer";

export const userContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <div className="App">
      <Router>
        <userContext.Provider value={{ state, dispatch }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </userContext.Provider>
      </Router>
    </div>
  );
}

export default App;
