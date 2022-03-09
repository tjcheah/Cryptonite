//---------------------------------------------------------------------------
//imports
import React from "react";
import "./feature.css";

//---------------------------------------------------------------------------
//Feature component structure
const Feature = ({ title, text }) => (
  <div className="crypto__features-container__feature">
    <div className="crypto__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="crypto__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

//---------------------------------------------------------------------------
//export
export default Feature;
