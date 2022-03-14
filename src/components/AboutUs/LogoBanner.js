//---------------------------------------------------------------------------
//imports
import React from "react";
import { Hidden, makeStyles } from "@material-ui/core";
import logo from "../Cryptonite Logo.png";
import logoTitle from "./Cryptonite Title Cropped.png";

//---------------------------------------------------------------------------
//Styling and responsiveness
const useStyles = makeStyles((theme) => ({
  logoContainer: {
    backgroundColor: "#f2f2f2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 0,
    paddingLeft: 0,
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
    height: 120,

    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
      height: 100,
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 30,
      height: 100,
      justifyContent: "center",
      alignItems: "center",
    },
  },
  //make coin float
  "@keyframes float": {
    "0%": {
      transform: "translatey(0px)",
    },
    "50%": {
      transform: "translatey(-20px)",
    },
    "100%": {
      transform: "translatey(0px)",
    },
  },
  logo: {
    width: 200,
    height: 200,
    zIndex: 2,
    margin: "0px 50px",
    transform: "translatey(0px)",
    animation: `$float 4s ${theme.transitions.easing.easeInOut}`,
    animationIterationCount: "infinite",
    [theme.breakpoints.down("sm")]: {
      width: 150,
      height: 150,
      marginRight: 50,
    },
    [theme.breakpoints.down("xs")]: {
      width: 150,
      height: 150,
    },
  },
  logoTitle: {
    width: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

//---------------------------------------------------------------------------
//About us logo component structure
const LogoBanner = () => {
  //variable
  const classes = useStyles();

  return (
    <div className={classes.logoContainer}>
      <img src={logo} alt="logo" className={`${classes.logo}`} />
      <img src={logoTitle} alt="logoTitle" className={classes.logoTitle} />
    </div>
  );
};

//---------------------------------------------------------------------------
//export
export default LogoBanner;
