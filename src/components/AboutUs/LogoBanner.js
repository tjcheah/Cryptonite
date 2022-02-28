import React from "react";
import { makeStyles } from "@material-ui/core";
import logo from "../Cryptonite Logo.png";
import logoTitle from "./Cryptonite Title Cropped.png";

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    backgroundColor: "#dcdddb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 0,
    paddingLeft: 0,
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
    height: 120,
    boxShadow: "0px -2px 4px 1px #999",
    [theme.breakpoints.down("sm")]: {
      height: 60,
      justifyContent: "flex-end",
      alignItems: "flex-start",
    },
  },
  logo: {
    width: 200,
    height: 200,
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      width: 150,
      height: 150,
      marginRight: 50,
    },
  },
  logoTitle: {
    width: 360,
    height: 90,
    marginLeft: 20,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const LogoBanner = () => {
  const classes = useStyles();
  return (
    <div className={classes.logoContainer}>
      <img src={logo} alt="logo" className={classes.logo} />
      <img src={logoTitle} alt="logoTitle" className={classes.logoTitle} />
    </div>
  );
};

export default LogoBanner;
