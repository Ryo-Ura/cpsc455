import React from "react";
import "../style/navBar.css";

const NavBar = () => {
  return (
    <div className="topnav">
      <a className="active" href="../index.html">
        Home
      </a>
      <a href="https://github.com/Ryo-Ura">github</a>
      <a href="https://blogs.ubc.ca/cpsc4552023s/">CPSC455</a>
    </div>
  );
};

export default NavBar;
