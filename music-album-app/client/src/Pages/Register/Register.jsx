import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="register-title">Register as Artist</span>
      <div className="register-form">
        <label>Username</label>
        <input type="text" placeholder="username..." />
        <label>Email</label>
        <input type="text" placeholder="email..." />
        <label>Password</label>
        <input type="password" placeholder="password..." />
        <button className="register-btn">
          Register
        </button>
      </div>
      <button className="register-login-btn"><Link className="link" to="/login">
            Login
          </Link></button>
    </div>
  );
}
