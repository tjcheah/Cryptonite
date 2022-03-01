import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textContainer: {
    width: "28%",
    margin: "50px 0px 50px 180px",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "50px 0px 40px 0px",
    },
  },
  storyTitle: {
    fontWeight: 550,
    fontSize: 30,
    fontFamily: "Antonio",
    color: "#000",
    letterSpacing: 2,
    width: "100%",
    color: "#fff",
  },
  storyText: {
    fontSize: 15,
    fontFamily: "Antonio",
    color: "#000",
    paddingTop: 20,
    width: "100%",
    color: "#fff",
  },
}));

const OurStory = () => {
  const classes = useStyles();
  return (
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
  );
};

export default OurStory;
