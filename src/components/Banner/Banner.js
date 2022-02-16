import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  bannerContent: {
    height: 600,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  card: {
    display: "flex",
    alignItems: "center",
    backgroundImage: "url(./topo.jpg)",
    height: "100%",
    width: "70%",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 25,
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

function Banner() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Antonio",
            }}
          >
            Trending Cryptocurrencies
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              fontweight: "light",
              textTransform: "capitalize",
              fontFamily: "Antonio",
            }}
          >
            These coins are getting rising attention - Check out the top 10 most
            popular cryptocurrency coins for the last 24 hours.
          </Typography>
        </div>
        <Container className={classes.card} maxWidth="md">
          <Carousel />
        </Container>
      </Container>
    </div>
  );
}

export default Banner;
