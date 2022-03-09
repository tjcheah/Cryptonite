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
import { makeStyles } from "@material-ui/core";
import { Navbar } from "../components/LandingPage/components";
import "../components/LandingPage/LandingPage.css";
import "../components/LandingPage/index.css";
import logo from "../media/Cryptonite Logo (Silver Coin).png";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) => ({
  "@keyframes spin": {
    "0%": {
      opacity: 0,
      transform: "translateX(2000px)",
    },
    "60%": {
      opacity: 1,
      transform: "translateX(-30px)",
    },
    "80%": { transform: "translateX(10px)" },
    "100%": { transform: "translateX(0)" },
  },
  logoCont: {
    // backgroundColor: "pink",
    position: "absolute",
    width: "50%",
    right: -100,
    top: 650,
    zIndex: 9999,
    animation: "$spin 2s linear",
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "red",
      paddingLeft: 40,
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "orange",
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "yellow",
      display: "none",
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className="landing-page">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div className={classes.logoCont}>
        <img
          // style={{ width: "auto" }}
          src={logo}
          alt="logo"
        />
      </div>
      <Testament />
      <Features />
      <Statistics />
      <FAQ />
      <Message />
    </div>
  );
};

export default LandingPage;
