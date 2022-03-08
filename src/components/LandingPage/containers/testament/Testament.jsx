import React from "react";
import "./testament.css";
import customer from "../../../../media/lex Luthor.jpg";
import logo from "../../../../media/Cryptonite Logo (Silver Coin).png";
const Testament = () => (
  <div className="crypto__testament section__padding" id="testament">
    <div className="crypto__testament-image">
      <img src={customer} alt="customer" />
      <div className="crypto__testament-content">
        {" "}
        <h1>
          In my experience, I've found you can never have to much information
        </h1>
        <h2>Lex Luthor</h2>
      </div>
    </div>

    {/* <div className="crypto__testament-logo">
      <img src={logo} alt="logo" />
    </div> */}
  </div>
);

export default Testament;
