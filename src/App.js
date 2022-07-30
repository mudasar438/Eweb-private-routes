import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/Registration.js/Signup";
import Login from "./components/Registration.js/Login";
import Home from "./components/Pages/home";
import Men from "./components/Pages/Men";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Pages/navbar";
import Cart from "./components/Pages/Cart";
import Logout from "./components/Pages/Logout";
import Protected from "./components/protected";
import Section from "./components/Pages/section";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Protected Component={Home} />} />
          <Route path="/Men" element={<Protected Component={Men} />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/section/:id/" element={<Section />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
