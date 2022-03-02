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
  wrapIcon: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Antonio",
    margin: "0 !important",
    paddingTop: 5,
  },
  title: {
    fontFamily: "Antonio",
    fontWeight: 550,
    letterSpacing: 3,
    margin: "0 !important",
  },
  subtitle: {
    fontFamily: "Antonio",
    paddingTop: 5,
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
          padding: "30px 0px 40px 0px",
          "& > :not(style)": {
            width: "500px",
            m: 1,
          },
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
          <ApartmentIcon /> &nbsp;&nbsp;&nbsp;&nbsp;Level 20, iTech Tower,
          Jalan Impact Cyber 6, 63000 Cyberjaya, Selangor
        </Typography>
      </Box>
    </div>
  );
}
