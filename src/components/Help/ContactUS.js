import React from "react";

import Box from "@mui/material/Box";
import "./Help.css";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import ApartmentIcon from "@mui/icons-material/Apartment";

const useStyles = makeStyles((theme) => ({
  title: {
    // backgroundColor: "red",
    width: 1100,
    fontFamily: "Antonio",
    fontWeight: 600,
    letterSpacing: 3,
    margin: "0 !important",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  subtitle: {
    // backgroundColor: "green",
    width: 1100,
    fontFamily: "garamond",
    fontSize: 18,
    paddingBottom: 10,
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  wrapIcon: {
    // backgroundColor: "orange",
    width: 1100,
    display: "flex",
    alignItems: "center",
    fontFamily: "Antonio",
    margin: "0 !important",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
}));

export default function Contactus() {
  // const [post, setPost] = useState([]);

  const classes = useStyles();

  return (
    <div className="Help">
      <Box
        className="contact-us"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "#f2f2f2",
          color: "#000",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 0px 50px 0px",
        }}
      >
        {" "}
        <Typography variant="h4" className={classes.title}>
          CONTACT US
        </Typography>
        <Typography variant="subtitle2" className={classes.subtitle}>
          Questions not answered? Call or email us directly here!
        </Typography>
        <Typography variant="subtitle1" className={classes.wrapIcon}>
          <LocalPhoneIcon /> &nbsp;&nbsp;&nbsp;&nbsp;011-1114 9762
        </Typography>
        <Typography variant="subtitle1" className={classes.wrapIcon}>
          <EmailIcon /> &nbsp;&nbsp;&nbsp;&nbsp;helpdesk@cryptonite.com.my
        </Typography>
        <Typography variant="subtitle1" className={classes.wrapIcon}>
          <ApartmentIcon /> &nbsp;&nbsp;&nbsp;&nbsp;Level 20, iTech Tower, Jalan
          Impact Cyber 6, 63000 Cyberjaya, Selangor
        </Typography>
      </Box>
    </div>
  );
}
