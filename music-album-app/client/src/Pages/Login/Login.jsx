import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="login-title">Login as Artist</span>
      <div className="login-form">
        <label>Email</label>
        <input type="text" placeholder="email..." />
        <label>Password</label>
        <input type="password" placeholder="password..." />
        <button className="login-btn">
  
            Login
          
        </button>
      </div>
      <button className="login-reg-btn">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
