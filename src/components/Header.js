import React, { useState } from "react";
import NavLogo from "./Cryptonite Title Cropped.png";
import loginStone from "./Gray Stone.png";
import {
  AppBar,
  Container,
  Toolbar,
  Button,
  Typography,
  Select,
  MenuItem,
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { CryptoState } from "../CryptoContext";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  navContainer: {
    position: "static",
    display: "flex",
    top: 0,
    width: "100%",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  nav: {
    position: "static",
    display: "flex",
    flexDirection: "row",
    width: "95%",
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#ffffff",
    top: 0,
    marginRight: 0,
    paddingRight: 0,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    boxShadow: "0px 4px 4px 2px #aaa",
    flexWrap: "wrap",
  },

  navLogo: {
    display: "flex",
    width: 280,
    height: 70,
    marginRight: 50,
    [theme.breakpoints.down("sm")]: {
      width: 240,
      height: 60,
    },
  },
  title: {
    display: "flex",
    fontSize: 18,
    color: "#7c7c7c",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    letterSpacing: 3,
    cursor: "pointer",
    fontFamily: "Antonio",
    marginRight: 15,
    "&:hover": {
      color: "#233c25",
      fontWeight: 550,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  loginButton: {
    borderRadius: 50,
    backgroundColor: "#233c25",
    color: "#ffffff",
    padding: 10,
    fontSize: 20,
    fontFamily: "Antonio",
    height: 50,
    marginLeft: "auto",
    "&:hover": {
      // color: "#000",
      backgroundColor: "#80b4b6",
      boxShadow: "2px 2px 4px 2px #aaa",
      fontWeight: 550,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  currencyButton: {
    marginRight: 10,
    borderRadius: 30,
    fontSize: 15,
    color: "#7c7c7c",
    backgroundColor: "#f2f2f2",
    letterSpacing: 1,
    fontWeight: "bold",
    fontFamily: "Antonio",
    height: 35,
    label: "#aaa",
    "& .MuiSvgIcon-root": {
      color: "lightgray",
    },
    "&:hover": {
      color: "#555",
      fontWeight: 550,
      "& .MuiSvgIcon-root": {
        color: "gray",
      },
      [theme.breakpoints.down("sm")]: {
        display: "flex",
      },
    },
  },

  menuItem: {
    fontSize: 12,
    color: "#fff",
    letterSpacing: 1,
    fontFamily: "Antonio",
    fontWeight: "bold",
  },
  loginStone: {
    height: 90,
    padding: 10,
    "&:hover": {
      height: 95,
    },
  },
  hamburger: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      width: 20,
      height: 20,
      marginLeft: "auto",
    },
  },
  burgerFrame: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "absolute",
    boxShadow: "1px 1px 1px 1px #888",
    top: 15,
    right: 5,
    borderRadius: 30,
    backgroundColor: "#f2f2f2",
    paddingBottom: 10,
    flex: 1,
    width: 150,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  burgerItem: {
    border: "#aaa",
    color: "#555",
    fontSize: 14,
    fontFamily: "Antonio",
    padding: 10,
    width: "100%",
    textAlign: "right",
    "&:hover": {
      color: "#000",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  close: {
    width: 20,
    height: 20,
    color: "#000",
    backgroundColor: "#f2f2f2",
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    right: 0,
    // width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const { currency, setcurrency } = CryptoState();

  const [openHamburger, setOpenHamburger] = useState(false);

  console.log(currency);

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
      <Container className={classes.navContainer}>
        <AppBar className={classes.nav}>
          <Container>
            <Toolbar>
              <img
                onClick={() => navigate("/")}
                src={NavLogo}
                alt="Logo"
                className={classes.navLogo}
              />
              <Typography
                onClick={() => navigate("/market")}
                className={classes.title}
                variant="h6"
              >
                MARKET
              </Typography>
              <Typography
                onClick={() => navigate("/about")}
                className={classes.title}
                variant="h6"
              >
                ABOUT US
              </Typography>
              <Typography
                onClick={() => navigate("/help")}
                className={classes.title}
                variant="h6"
              >
                HELP
              </Typography>
              <Button className={classes.loginButton}>
                <Select
                  variant="outlined"
                  className={classes.currencyButton}
                  value={currency}
                  onChange={(e) => setcurrency(e.target.value)}
                >
                  <MenuItem className={classes.menuItem} value={"USD"}>
                    USD
                  </MenuItem>
                  <MenuItem className={classes.menuItem} value={"MYR"}>
                    MYR
                  </MenuItem>
                </Select>
                LOGIN
                <img
                  className={classes.loginStone}
                  src={loginStone}
                  alt="login"
                />
              </Button>
              <FaBars
                onClick={() => setOpenHamburger(!openHamburger)}
                className={classes.hamburger}
              />
              {openHamburger && (
                <Container className={classes.burgerFrame}>
                  <Typography>
                    <AiFillCloseCircle
                      onClick={() => setOpenHamburger(!openHamburger)}
                      className={classes.close}
                    />
                  </Typography>

                  <Typography
                    onClick={() => navigate("/market")}
                    className={classes.burgerItem}
                  >
                    MARKET
                  </Typography>
                  <Typography
                    onClick={() => navigate("/about")}
                    className={classes.burgerItem}
                  >
                    ABOUT US
                  </Typography>
                  <Typography
                    onClick={() => navigate("/help")}
                    className={classes.burgerItem}
                  >
                    HELP
                  </Typography>
                  <Typography className={classes.burgerItem}>LOGIN</Typography>
                </Container>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Container>
    </ThemeProvider>
  );
};

export default Header;
