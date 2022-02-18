import React from "react";
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

const useStyles = makeStyles(() => ({
  navContainer: {
    position: "static",
    top: 0,
    display: "flex",
    width: "100%",
  },
  nav: {
    position: "static",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "95%",
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#ffffff",
    top: 0,
    // left: 2,
    marginLeft:30,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    boxShadow: "0px 4px 4px 2px #aaa",
    flexWrap: "wrap",
  },
  navLogo: {
    display: "flex",
    flex: 1,
    width: 280,
    height: 70,
    marginRight: 100,
  },
  title: {
    flex: 1,
    display: "flex",
    alignItems: "flex-end",
    fontSize: 18,
    color: "#7c7c7c",
    fontWeight: "bold",
    letterSpacing: 3,
    flexWrap: "wrap",
    cursor: "pointer",
    fontFamily: "Antonio",
    marginRight: 10,
    "&:hover": {
      color: "#233c25",
      fontWeight: 550,
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
      // boxShadow: "1px 1px 1px 1px #888",
      fontWeight: 550,
      "& .MuiSvgIcon-root": {
        color: "gray",
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
}));

const Header = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const { currency, setcurrency } = CryptoState();

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
            </Toolbar>
          </Container>
        </AppBar>
      </Container>
    </ThemeProvider>
  );
};

export default Header;
