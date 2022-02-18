import React from "react";
import bottomLogo from "./Cryptonite Title 2.png";
import {
  BottomNavigation,
  Container,
  Typography,
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";

const useStyles = makeStyles(() => ({
  footerContainer: {
    display: "flex",
    bottom: 0,
    width: "100%",
    justifyContent: "center",
    flexWrap: "wrap",
    fontFamily: "Antonio",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#ffffff",
    color: "#000",
    bottom: 0,
    paddingTop: 25,
    paddingBottom: 220,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    boxShadow: "0px -4px 4px 2px #aaa",
    lineHeight: 18,
  },
  footerLeft: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    marginLeft: 50,
  },
  footerLeftTop: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  footerLeftBottom: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingTop: 25,
    paddingBottom: 20,
  },
  footerRight: {
    width: "50%",
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bottomLogo: {
    width: 260,
    height: 60,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "Antonio",
    paddingTop: 5,
    width: "90%",
  },
  bottomTitle: {
    fontSize: 10,
    fontFamily: "Antonio",
    fontWeight: 700,
    letterSpacing: 1,
    width: "70%",
  },
  miniTitle: {
    fontSize: 13,
    fontFamily: "Antonio",
    lineHeight: 2,
    letterSpacing: 1,
    "&:hover": {
      fontWeight: 550,
    },
  },
  column1: { width: "50%", flex: 1 },
  column2: { width: "50%", flex: 5 },
}));

const Footer = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container className={classes.footerContainer}>
        <BottomNavigation className={classes.footer}>
          <Container className={classes.footerLeft}>
            <Container className={classes.footerLeftTop}>
              <img
                onClick={() => navigate("/")}
                src={bottomLogo}
                alt="Logo"
                className={classes.bottomLogo}
              />
              <Typography className={classes.subtitle}>
                Cryptonite came with a mission to provide actual real-time
                crypto data for users to make their best, rewarding investment
                decisions in the cryptocurrency world.
              </Typography>
            </Container>
            <Container className={classes.footerLeftBottom}>
              <Typography className={classes.bottomTitle}>
                Help Center | Contact | Bug Bounty | Disclaimer | Terms of
                Service | Privacy Policy | Ad Policy
              </Typography>
              <Typography className={classes.bottomTitle}>
                <FaRegCopyright/> Cryptonite. All Rights Reserved.
              </Typography>
            </Container>
          </Container>
          <Container className={classes.footerRight}>
            <Container className={classes.column1}>
              <Typography
                onClick={() => navigate("/about")}
                className={classes.miniTitle}
              >
                About Us
              </Typography>
              <Typography
                onClick={() => navigate("/help")}
                className={classes.miniTitle}
              >
                Contact Us
              </Typography>
              <Typography
                onClick={() => navigate("/help")}
                className={classes.miniTitle}
              >
                Help
              </Typography>
              <Typography
                onClick={() => navigate("/careers")}
                className={classes.miniTitle}
              >
                Careers
              </Typography>
            </Container>
            <Container className={classes.column2}>
              <Typography
                onClick={() => navigate("/market")}
                className={classes.miniTitle}
              >
                Search Cryptocurrency
              </Typography>
              <Typography
                onClick={() => navigate("/")}
                className={classes.miniTitle}
              >
                Trending Markets
              </Typography>
              <Typography
                onClick={() => navigate("/help")}
                className={classes.miniTitle}
              >
                Top Gainers & Losers
              </Typography>
              <Typography
                onClick={() => navigate("/news")}
                className={classes.miniTitle}
              >
                Crypto News
              </Typography>
            </Container>
          </Container>
        </BottomNavigation>
      </Container>
    </ThemeProvider>
  );
};
export default Footer;
