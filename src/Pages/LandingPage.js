import React from "react";
import {
  Footer,
  Testament,
  Features,
  Message,
  Header,
  Statistics,
  FAQ,
} from "../components/LandingPage/containers";
import { Navbar } from "../components/LandingPage/components";
import "../components/LandingPage/LandingPage.css";
import "../components/LandingPage/index.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Testament />
      <Features />
      <Statistics />
      {/* //no need brands */}
      <FAQ />
      <Message />
      {/* //no need cta */}
    </div>
  );
};

export default LandingPage;
