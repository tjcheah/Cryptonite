import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../../../media/Cryptonite Title Cropped.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const Menu = () => (
    <>
      {" "}
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#testament">Testament</a>
      </p>
      <p>
        <a href="#features">Features</a>
      </p>
      <p>
        <a href="#statistics">Statistics</a>
      </p>
      <p>
        <a href="#faq">FAQ</a>
      </p>
      <p>
        <a href="#from-us">From us</a>
      </p>
    </>
  );

  return (
    <div className="crypto__navbar">
      <div className="crypto__navbar-links">
        <div className="crypto__navbar-links_logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="crypto__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="crypto__navbar-sign">
        <button type="button" onClick={() => navigate("/")}>
          Conquer the market
        </button>
      </div>
      <div className="crypto__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="black"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="black"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="crypto__navbar-menu_container slide-bottom">
            <div className="crypto__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="crypto__navbar-menu_container-links-sign">
              <button type="button" onClick={() => navigate("/")}>
                Conquer the market
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
