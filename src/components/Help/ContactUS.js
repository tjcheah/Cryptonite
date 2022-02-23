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
    verticalAlign: "middle",
    display: "flex",
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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "30px",
          "& > :not(style)": {
            width: "500px",
            m: 1,
          },
        }}
      >
        {" "}
        <Typography variant="h4">CONTACT US</Typography>
        <Typography variant="subtitle2">
          Questions not answered? Call or email us directly here!
        </Typography>
        <Typography variant="subtitle1" className={classes.wrapIcon}>
          <LocalPhoneIcon /> &nbsp;&nbsp; 011-1114 9762
        </Typography>
        <Typography variant="subtitle1" className={classes.wrapIcon}>
          <EmailIcon /> &nbsp;&nbsp; helpdesk@cryptonite.com.my
        </Typography>
        <Typography variant="subtitle1" className={classes.wrapIcon}>
          <ApartmentIcon /> &nbsp;&nbsp; Level 20, iTech Toewwr, Jalan Impact
          Cyber 6, 36000, &nbsp;&nbsp;&nbsp;Cyberjaya, Selangor
        </Typography>
      </Box>
    </div>
  );
}
