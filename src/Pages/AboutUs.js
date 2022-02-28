import React from "react";
import { makeStyles } from "@material-ui/core";
import logo from "../components/Cryptonite Logo.png";
import LogoBanner from "../components/AboutUs/LogoBanner";
import OurStory from "../components/AboutUs/OurStory";
import BehindCryptonite from "../components/AboutUs/BehindCryptonite";

const useStyles = makeStyles((theme) => ({
  dummy: {
    height: 200,
    backgroundColor: "#c6cec6",
    // zIndex: 1,
    marginTop: -100,
    [theme.breakpoints.down("sm")]: {
      height: 130,
    },
  },
  background: {
    display: "flex",
    flexDirection: "column",
    backgroundImage: "url(./topo.jpg)",
    overflowX: "hidden",
    overflowY: "visible",
  },
  ourStoryContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  bottomLogoContainer: {
    display: "flex",
    width: "100%",
    marginTop: -600,
    justifyContent: "flex-end",
    alignItems: "flex-end",

    [theme.breakpoints.down("md")]: {
      marginTop: -550,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: -200,
    },
  },
  bottomLogo: {
    display: "flex",
    width: "70%",
    marginRight: -250,
    [theme.breakpoints.down("md")]: {
      marginRight: -220,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: -200,
    },
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.dummy}></div>
      <LogoBanner />
      <div className={classes.background}>
        <div className={classes.ourStoryContainer}>
          <OurStory />
        </div>
        <BehindCryptonite />
        <div className={classes.bottomLogoContainer}>
          <img src={logo} alt="logo" className={classes.bottomLogo} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
