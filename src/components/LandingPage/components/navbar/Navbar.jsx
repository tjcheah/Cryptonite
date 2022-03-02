import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import logo from "../../../../media/Cryptonite Title (Silver).png";
const Navbar = () => {
  return (
    <div className="crypto__navbar">
      <div className="crypto__navbar-links">
        <div className="crypto__navbar-links_logo">
          <img src={logo} alt="logo"></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
