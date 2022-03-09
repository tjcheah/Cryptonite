//---------------------------------------------------------------------------
//imports
import React from "react";
import {
  Testament,
  Features,
  Message,
  Header,
  Statistics,
  FAQ,
} from "../components/LandingPage/containers";
import { makeStyles } from "@material-ui/core";
import { Navbar, Scroller } from "../components/LandingPage/components";
import "../components/LandingPage/LandingPage.css";
import "../components/LandingPage/index.css";
import logo from "../media/Cryptonite Logo (Silver Coin).png";

//---------------------------------------------------------------------------
//Landing page structure styles
const useStyles = makeStyles((theme) => ({
  logoCont: {
    position: "absolute",
    width: "50%",
    right: -100,
    top: 650,
    zIndex: 9999,
    [theme.breakpoints.down("md")]: {
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

//---------------------------------------------------------------------------
//Landing page structure

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className="landing-page ">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div className={classes.logoCont}>
        <img src={logo} alt="logo" />
      </div>
      <Testament />
      <Features />
      <Statistics />
      <FAQ />
      <Message />
      <Scroller />
    </div>
  );
};

//---------------------------------------------------------------------------
//export
export default LandingPage;
