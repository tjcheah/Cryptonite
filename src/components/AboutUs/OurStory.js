import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textContContainer: {
    overflow: "hidden",
    height: "100%",
    width: 1200,
    // backgroundColor: "red",
    display: "flex",

    // flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "green",
      width: "90%",
      // margin: "50px 0px 40px 0px",
    },
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: "indigo",
      width: "90%",
      // margin: "50px 0px 40px 0px",
    },
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "indigo",
      justifyContent: "center",
      alignContent: "center",
      width: "90%",
      // margin: "50px 0px 40px 0px",
    },
  },
  textPlaceContainer: {
    // backgroundColor: "yellow",
    height: "100%",
    width: "40%",
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "lightgreen",
      width: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: "red",
      width: "30%",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  textContainer: {
    // backgroundColor: "blue",
    height: "100%",
    width: 545,
    padding: 40,
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "red",
      width: 540,
      // margin: "50px 0px 40px 0px",
    },
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: "orange",
      width: 500,
      // margin: "50px 0px 40px 0px",
    },
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "yellow",
      width: "90%",
    },
  },
  storyTitle: {
    fontWeight: 600,
    fontSize: 40,
    fontFamily: "Antonio",
    color: "#fff",
    letterSpacing: 2,
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "yellow",
      textAlign: "center",
      paddingTop: 20,
      fontSize: 30,
    },
  },
  storyText: {
    fontSize: 20,
    fontFamily: "garamond",
    color: "#fff",
    paddingTop: 20,
    lineHeight: 1.1,
    textAlign: "justify",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
}));

const OurStory = () => {
  const classes = useStyles();
  return (
    <div className={classes.textContContainer}>
      <div className={classes.textPlaceContainer}>
        <Typography></Typography>
      </div>
      <div className={classes.textContainer}>
        <Typography className={classes.storyTitle}>OUR STORY</Typography>
        <Typography className={classes.storyText}>
          Cryptonite is founded in Feburary 2022 by a team of passionate
          developers with mission to provide actual real-time crypto data for
          users to make their best, rewarding investment decisions in the
          cryptocurrency world.
        </Typography>
        <Typography className={classes.storyText}>
          We provide 360 degree fundamentals of overview digital currencies
          activities for serious investors who want to acquire crypto-related
          information rapidly & intuitively.
        </Typography>
      </div>
    </div>
  );
};

export default OurStory;
