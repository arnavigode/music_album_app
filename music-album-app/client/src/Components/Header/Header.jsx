import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-title-sm">React & node</span>
        <span className="header-title-lg">Albums</span>
      </div>
      <img
        className="header-img"
        src="https://i.pinimg.com/736x/2b/8d/45/2b8d45b1659fa2a00639ed4e7de509a7.jpg"
        alt=""
      />
    </div>
  );
}
