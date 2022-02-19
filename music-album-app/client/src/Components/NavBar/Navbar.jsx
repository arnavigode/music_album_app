import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  const user = true;
  return (
    <div className="top">
      <div className="top-icon-left top-left">
        <i className="top-icon-left fa-brands fa-facebook-square"></i>
        <i className="top-icon-left fa-brands fa-twitter-square"></i>
        <i className="top-icon-left fa-brands fa-instagram-square"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="top-list-item">
            <Link
              to="/settings"
              className="link"
            >
              Profile
            </Link>
          </li>
          <li className="top-list-item">
            <Link
              to="/write"
              className="link"
            >
              Add-New
            </Link>
          </li>
          <li className="top-list-item">{user && "Logout"}</li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <img
            className="top-img"
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
            alt=""
          />
        ) : (
          <ul className="top-list">
            <li className="top-list-item">
              <Link
                to="/login"
                className="link"
              >
                Login
              </Link>
            </li>

            <li className="top-list-item">
              <Link
                to="/register"
                className="link"
              >
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="top-srch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
