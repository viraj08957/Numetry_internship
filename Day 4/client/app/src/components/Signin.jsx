/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(email, password);
    axios
      .post("http:/localhost:500/signin", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);

        if (res.data.code == 500) {
          alert("user not found");
        }
        if (res.data.code == 404) {
          alert("password is wrong");
        }
        if (res.data.code == 200) {
          navigate("/");
          localStorage.setItem("TOKEN", res.data.token);
          localStorage.setItem("EMAIL", res.data.item);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="center">SignIN</h1>
      <div className="outcard">
        Email
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          className="inputs"
          type="email"
        />{" "}
        <br />
        <br />
        password
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          className="inputs"
          type="password"
        />{" "}
        <br />
        <br />
        <button onClick={handleSubmit} className="btns">
          SUBMIT
        </button>
        <Link
          style={{ textAlign: "center", display: "block", marginTop: "5px" }}
          to={"/signup"}
        >
          SIGN UP
        </Link>
        <Link
          style={{ textAlign: "center", display: "block", marginTop: "5px" }}
          to={"/forget-pass"}
        >
          {" "}
          Forget Password{" "}
        </Link>
      </div>
    </>
  );
}

export default Signin;
