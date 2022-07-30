import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import Signup from "./components/Registration.js/Signup";
import Login from "./components/Registration.js/Login";
import Home from "./components/Pages/home";
import Men from "./components/Pages/Men";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Logout from "./components/Pages/Logout";
import Protected from "./components/protected";
import Cart from "./components/Pages/addtoCart";

function App() {

    useEffect(() => {
      const storageData = JSON.parse(localStorage.getItem("cartmudasar"));
      if (storageData == null) {
        localStorage.setItem("cartmudasar", JSON.stringify([]));
      }
    }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Protected Component={Home} />} />
          <Route path="/Men" element={<Protected Component={Men} />} />

          <Route path="/addtoCart" element={<Cart />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
