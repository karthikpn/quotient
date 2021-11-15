import React from "react";
import { Link } from "react-router-dom";
import "../views/register.css";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register");
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit} className="register__form">
        <input
          className="register__name"
          type="text"
          required
          placeholder="Name"
        />
        <input
          className="register__username"
          type="email"
          required
          placeholder="email"
        />
        <input
          className="register__password"
          type="password"
          required
          placeholder="password"
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
