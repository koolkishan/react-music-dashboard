import React from "react";
import avatar from "../assets/avatarImage.jpeg";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Overview</h1>
      <div className="info">
        <h4>kishan@groove.music</h4>
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
