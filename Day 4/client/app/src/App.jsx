/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";
import ForgetPassword from "./components/ForgotPassword";
import NewSubmit from "./components/NewSubmit";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="/forgot-pass" element={<ForgetPassword />} />
          <Route path="/otp" element={<NewSubmit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
