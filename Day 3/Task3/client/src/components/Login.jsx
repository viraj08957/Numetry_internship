/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data == "notexist") {
            alert("User have not sign up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  function sendotp() {
    let opt_val = Math.floor(Math.random() * 10000);
    return opt_val;
  }

  function forgotPassword() {
    var emailInput = document.getElementById("email").value;
    if (emailInput.trim() !== "") {
      axios.get("http://localhost:8000/sendOTP");
      alert("you reset link sent to your email : " + emailInput);
    } else {
      var email = document.getElementById("email").value;

      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("please enter a valid email address .");
        return;
      }

      alert("Please enter your email address");
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>

      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          id="email"
          name="email"
          required
        />
        <br />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
        />
        <br />
        <p id="forgot-password">
          <a href="#" onClick={forgotPassword}>
            Forgot Password?
          </a>
        </p>
        <p id="message"></p>

        <input type="submit" onClick={submit} />
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to="Signup">Signup Page</Link>
    </div>
  );
}

export default Login;
