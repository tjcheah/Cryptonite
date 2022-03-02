import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "../components/LandingPage/containers";
import { CTA, Brand, Navbar } from "../components/LandingPage/components";
import "../components/LandingPage/LandingPage.css";
import "../components/LandingPage/index.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default LandingPage;
