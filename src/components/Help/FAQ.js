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
  faqTitle: {
    fontFamily: "Antonio",
    fontWeight: 550,
    letterSpacing: 3,
  },
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "35px 0 35px 0",
    margin: "50px 0px 50px 0px",
  },
  heading: {
    fontSize: 14,
    fontFamily: "Antonio",
  },
  textBody: {
    fontFamily: "Antonio",
    fontSize: 12,
    marginTop: 5,
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionSummary: {
    backgroundColor: "white",
    color: "black",
  },
  decorativeLine: {
    width: "100%",
    backgroundColor: "#eee",
    justifyContent: "center",
    height: 1,
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
        padding: "180px 0px 50px 0px",
        marginTop:-20,
        "& > :not(style)": {
          width: "800px",
          m: 1,
        },
      }}
    >
      <Paper
        style={{ borderRadius: 30 }}
        elevation={8}
        className={classes.rootContainer}
      >
        <Typography variant="h4" className={classes.faqTitle}>
          FREQUENTLY ASKED QUESTIONS (FAQ){" "}
        </Typography>
        <div className="accordion-list">
          <Accordion className="accordion-box">
            <AccordionSummary
              className={classes.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Why is Cryptonite price different from others?
              </Typography>
            </AccordionSummary>
            <div className={classes.decorativeLine}></div>
            <AccordionDetails className={classes.accordionSummary}>
              <Typography className={classes.textBody}>
                Cryptonite calculates a <b>volume-weighted average price</b> by
                taking data from all major cryptocurrency exchanges and
                cryptocurrency pairs worldwide.
                <Typography className={classes.textBody}>
                  Some cryptocurrency prices are being driven up by large
                  trading volume by exchanges in certain geographical region
                  trading them at a large premium from other countries, or by
                  decentralized exchanges. This may explain why you may see a
                  difference between our volume-weighted average price as
                  compared to US exchanges.
                </Typography>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion-box">
            <AccordionSummary
              className={classes.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Can I use Cryptonite data for personal and business use?
              </Typography>
            </AccordionSummary>
            <div className={classes.decorativeLine}></div>
            <AccordionDetails className={classes.accordionSummary}>
              <Typography className={classes.textBody}>
                Yes! we welcome you to use our data or screenshots on anything
                that you work on be it for your book, website, research report,
                presentation, etc.{" "}
                <b>You do not need to request permission from Cryptonite</b> to
                use any Cryptonite information on any of your publications. Just
                mention that the data was obtained from Cryptonite.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion-box">
            <AccordionSummary
              className={classes.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Does Cryptonite have an official coin?
              </Typography>
            </AccordionSummary>
            <div className={classes.decorativeLine}></div>
            <AccordionDetails className={classes.accordionSummary}>
              <Typography className={classes.textBody}>
                Presently,{" "}
                <b>Cryptonite does NOT have any official coins issued</b> and we
                do not have any plans to do so for now. Any projects claiming
                that their tokens are created by Cryptonite is categorically
                false, and potentially fraudulent. If you would like to report
                any scams impersonating our brand, kindly write in to{" "}
                <b>helpdesk@cryptonite.com.my</b> our team will investigate the
                matter thoroughly.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion-box">
            <AccordionSummary
              className={classes.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                What is the Timezone used in Cryptonite charts?
              </Typography>
            </AccordionSummary>
            <div className={classes.decorativeLine}></div>
            <AccordionDetails className={classes.accordionSummary}>
              <Typography className={classes.textBody}>
                Cryptonite uses data adjusted to <b>local Timezones</b> on
                charts displayed on each asset. To display the coin/market
                information,
                <b>hover your mouse over onto the line chart</b>. The time
                displayed will be adjusted to your local timezone.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion-box">
            <AccordionSummary
              className={classes.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                How to change the currency?
              </Typography>
            </AccordionSummary>
            <div className={classes.decorativeLine}></div>
            <AccordionDetails className={classes.accordionSummary}>
              <Typography className={classes.textBody}>
                Near the <b>top-right corner</b>, there is a dropdown that
                allows you to change set the currency of your choice,{" "}
                <b>either in USD or MYR</b>.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Paper>
    </Box>
  );
}
