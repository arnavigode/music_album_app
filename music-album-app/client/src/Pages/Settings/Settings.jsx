import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settings-wrap">
        <div className="settings-title">
          <span className="settings-update-title">Update Account</span>
          <span className="settings-delete-title">Delete Account</span>
        </div>
        <form className="settings-form">
          <div className="settings-pp">
          <label> Profile Picture</label>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <label htmlFor="settings-fileinput">
            <i className="settings-prof-icon fa-solid fa-user"></i>
          </label>
          <input type="file" id="settings-fileinput" style={{display:"none"}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="username" />
          <label>Email</label>
          <input type="email" placeholder="username@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="password****" />
          <button className="settings-submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}