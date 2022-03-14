import React from "react";

import "../components/Help/Help.css";

import FAQ from "../components/Help/FAQ.js";
import Contact from "../components/Help/ContactUS.js";
import Feedback from "../components/Help/Feedback.js";

export default function Help() {
  return (
    <div>
      <FAQ />
      <Contact />
      <Feedback />
    </div>
  );
}
