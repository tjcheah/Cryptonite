import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EurUsd from "../components/Forex/eur-usd.js";
import NzdUsd from "../components/Forex/nzd-usd.js";
import UsdJpy from "../components/Forex/usd-jpy.js";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
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
}));

export default function Forex() {
  const classes = useStyles();
  return (
    <div>
      <div
        style={{
          height: 120,
          backgroundColor: "#c6cec6",
          // zIndex: 1,
          marginTop: -120,
        }}
      ></div>
      <div className={classes.mainContainer}>
        <NzdUsd />
        <UsdJpy />
        <EurUsd />
      </div>
    </div>
  );
}
