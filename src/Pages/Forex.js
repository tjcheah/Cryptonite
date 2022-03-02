import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EurUsd from "../components/Forex/eur-usd.js";
import NzdUsd from "../components/Forex/nzd-usd.js";
import UsdJpy from "../components/Forex/usd-jpy.js";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    padding: "0px 300px",
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "green",
      flexDirection: "column",
      padding: "10px 0px",
    },
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "blue",
      flexDirection: "column",
      padding: "10px 0px",
    },
  },
  title: {
    // backgroundColor: "yellow",
    marginTop: 30,
    width: 900,
    color: "black",
    fontFamily: "antonio",
    fontWeight: 550,
    fontSize: 40,
    letterSpacing: 2,
    lineHeight: 1,
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "green",
      width: "80%",
      fontSize: 40,
    },
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "blue",
      marginTop: 20,
      fontSize: 30,
    },
  },
}));

export default function Forex() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.mainContainer}>
        <Typography className={classes.title}>
          The Best Forex Currency Pairs
        </Typography>
        <NzdUsd />
        <UsdJpy />
        <EurUsd />
      </div>
    </div>
  );
}
