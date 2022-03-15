/* eslint-disable jsx-a11y/alt-text */
import "./login.css";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../App";

const Login = () => {
  const { state, dispatch } = useContext(userContext);
  const history = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const handelInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Info Not Correct 🥰🥰☺");
      console.log("Info Not Correct");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successfull 🥰🥰☺");
      console.log("Successfull");
      history("/");
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="logo">
          {" "}
          <img src="https://i.pinimg.com/originals/58/ba/ce/58bace42e0e777c45691cecfc1f4167e.jpg" />{" "}
        </div>
        <div className="mt-4 text-center name"> Login 😊😉</div>
        <form className="p-3 mt-3" method="POST">
          <div className="form-field d-flex align-items-center">
            {" "}
            <span className="far fa-user" />{" "}
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handelInputs}
              id="userName"
              placeholder="Your Email"
            />{" "}
          </div>
          <div className="form-field d-flex align-items-center">
            {" "}
            <span className="fas fa-key" />{" "}
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handelInputs}
              id="pwd"
              placeholder="Password"
            />{" "}
          </div>{" "}
          <button className="mt-3 btn" onClick={postData}>
            Login
          </button>
        </form>
        <div className="text-center fs-6">
          {" "}
          <Link to="/">Forget password?</Link> or{" "}
          <Link to="/signup">Sign up</Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;
