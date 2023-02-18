import React, { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";
import axios from "axios";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const cPassword = useRef();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.current.value !== cPassword.current.value) {
      cPassword.current.setCustomValidity("Password should be same");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        cPassword: cPassword.current.value,
      };
      try {
        await axios.post("auth/register", user);
        history.push("/login");
      } catch (err) {}
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialSite</h3>
          <span className="loginDesc">
            Connect with friend and the world around you.
          </span>
        </div>
        <div className="loginRight">
          <form onSubmit={handleSubmit} className="loginBox">
            <input
              className="loginInput"
              required
              ref={username}
              type="text"
              placeholder="Username"
            />
            <input
              className="loginInput"
              required
              ref={email}
              type="email"
              placeholder="Email"
            />
            <input
              className="loginInput"
              required
              ref={password}
              type="password"
              minLength="6"
              placeholder="Password"
            />
            <input
              className="loginInput"
              required
              ref={cPassword}
              type="password"
              minLength="6"
              placeholder="Confirm Password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">
              Log into your account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
