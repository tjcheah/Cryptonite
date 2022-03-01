import React from "react";

import "../components/Help/Help.css";

import { makeStyles } from "@material-ui/core/styles";
import FAQ from "../components/Help/FAQ.js";
import Contact from "../components/Help/ContactUS.js";
import Feedback from "../components/Help/Feedback.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",

    padding: 20,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  wrapIcon: {
    verticalAlign: "middle",
    display: "flex",
  },
}));

export default function Help() {
  const classes = useStyles();

  return (
    <div className="Help">
      <FAQ />
      <Contact />
      <Feedback />
    </div>
  );
}
