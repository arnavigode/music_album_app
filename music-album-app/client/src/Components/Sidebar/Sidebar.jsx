import React from "react";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-items">
        <span className="sidebar-title">Trending</span>
        <img
          className="img-sidebar"
          src="https://i.pinimg.com/736x/9a/0f/29/9a0f2932ac645331665080380cca3489.jpg"
          alt=""
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          illo culpa.
        </p>
      </div>
      <div className="sidebar-items">
        <div className="sidebar-title">CATEGORIES</div>
        <ul className="sidebar-list">
          <li className="sidebar-list-items">Pop</li>
          <li className="sidebar-list-items">Classical</li>
          <li className="sidebar-list-items">Hip-hop</li>
          <li className="sidebar-list-items">Silent</li>
          <li className="sidebar-list-items">Dance</li>
        </ul>
      </div>
      <div className="sidebar-items">
        <div className="sidebar-title">Follow us</div>
        <div className="sidebar-Social">
          <i className="sidebar-icon fa-brands fa-facebook-square"></i>
          <i className="sidebar-icon fa-brands fa-twitter-square"></i>
          <i className="sidebar-icon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
