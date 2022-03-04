import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";
const Features = () => (
  <div className="crypto__feature section__margin" id="features">
    <h1 className="gradient__text">Highlight Features</h1>
    <div className="crypto__feature-box">
      <div className="crypto__feature-feature">
        <Feature
          title="What is Cryptonite"
          text="We pride ourselves in providing new and experienced traders the up-to-date and reliable data all regarding to the trading market"
        />
      </div>
      <div className="crypto__feature-heading"></div>
      <div className="crypto__feature-container">
        <Feature title="Compact, Up-to-date, User-friendly" text="" />
        <Feature
          title="Click away, all from the get go without account sign up requirements"
          text=""
        />
        <Feature
          title="Simply as it can be, market guru is not required"
          text=""
        />
      </div>
    </div>
  </div>
);

export default Features;
