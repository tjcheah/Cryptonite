import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "./Help.css";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
}));

export default function FAQ() {
  // const [post, setPost] = useState([]);

  const classes = useStyles();

  //   useEffect(() => {
  //     // invalid url will trigger an 404 error
  //     axios
  //       .get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
  //       .then((response) => {
  //         console.log(response.data.Data);
  //         setPost(response.data.Data.splice(0, 10));
  //       })
  //       .catch((error) => {
  //         setError(error);
  //       });
  //     return () => {};
  //   }, []);

  return (
    <Box
      className="FAQ"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#C6CEC6",
        "& > :not(style)": {
          width: "800px",
          m: 1,
        },
      }}
    >
      <Paper elevation={8} className={classes.root}>
        <Typography variant="h4" className="FAQ-title" align="center">
          Frequently Asked Questions (FAQ){" "}
        </Typography>
        <div className="accordion-list">
          <Accordion className="accordion-box">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Why is Cryptonite price different from others?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Why is Cryptonite price different from others?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion-box">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Can I use Cryptonite data for personal and business use?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Can I use Cryptonite data for personal and business use?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion-box">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Does Cryptonite have an official coin?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Does Cryptonite have an official coin?</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion-box">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Is Cryptonite hiring developers? What are the benefits?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Hello</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion-box">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                What are the official channels of Cryptonite?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Hello</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Paper>
    </Box>
  );
}
