import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../views/register.css";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit} className="register__form">
        <input
          className="register__name"
          type="text"
          required
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="register__username"
          type="email"
          required
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="register__password"
          type="password"
          required
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register__submit">register</button>
        <div className="register__link">
          <span>
            Already Registered? <Link to="/login"> Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
