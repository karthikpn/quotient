import React from "react";
import { Link } from "react-router-dom";
import "../views/login.css";
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login");
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login__form">
        <input
          className="login__username"
          type="email"
          required
          placeholder="email"
        />
        <input
          className="login__password"
          type="password"
          required
          placeholder="password"
        />
        <button className="login__submit">Login</button>
        <div className="login__link">
          <span>
            New User? <Link to="/register"> Register here</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
