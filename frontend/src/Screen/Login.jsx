import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../views/login.css";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post("/api/users/login", {
        email,
        password,
      });
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login__form">
        <input
          className="login__username"
          type="email"
          required
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login__password"
          type="password"
          required
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
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
