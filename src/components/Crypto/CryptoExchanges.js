import React from "react";
import { GetExchanges } from "../../config/api";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {
  createTheme,
  ThemeProvider,
  Container,
  Typography,
  TextField,
  TableContainer,
  LinearProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
} from "@material-ui/core";
import { CryptoState } from "../../CryptoContext";

const CryptoExchanges = () => {
  const [exchanges, setExchanges] = useState([]);

  const fetchCoin = async () => {
    const { data } = await axios.get(GetExchanges());
    setExchanges(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  const { symbol, loading } = CryptoState();

  const useStyles = makeStyles((theme) => ({
    themeContainer: {
      margin: 0,
      padding: 0,
    },
    container: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 60,
    },
    title: {
      fontFamily: "Antonio",
      fontWeight: 550,
      letterSpacing: 3,
      padding: 10,
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "black",
        fontFamily: "antonio",
        marginBottom: 10,
      },
    },
    TableContainer: {
      display: "flex",
      backgroundColor: "#f2f2f2",
      borderRadius: 40,
      textAlign: "center",
      paddingTop: 40,

      // [theme.breakpoints.up("xs")]: {
      //   // backgroundColor: "brown",
      //   height: "75%",
      //   width: "86%",
      // },
      // [theme.breakpoints.up("sm")]: {
      //   // backgroundColor: "pink",
      //   height: "75%",
      //   width: "86%",
      // },
      // [theme.breakpoints.up("md")]: {
      //   // backgroundColor: "green",
      //   height: "65%",
      //   width: "78%",
      // },
      // [theme.breakpoints.up("lg")]: {
      //   // backgroundColor: "cyan",
      //   height: "90%",
      //   width: 999,
      // },
    },
    tableContainer: {
      margin: "15px 0px",
      borderRadius: 30,
      boxShadow: "0px 2px 2px 1px #aaa",
    },
    contTitle: {
      margin: " 0px 0px 20px 0px",
      fontFamily: "antonio",
      fontWeight: "bold",
      color: "black",
      textTransform: "uppercase",
      textAlign: "start",
      fontSize: 45,
      letterSpacing: 5,
      lineHeight: 1,
    },
    contSearch: {
      backgroundColor: "black",
      boxShadow: "0px 2px 2px 1px #aaa",
      marginBottom: 20,
      width: "100%",
    },
    tableHead: {
      backgroundColor: "white",
      textAlign: "center",
      fontFamily: "antonio",
      color: "black",
      fontSize: 24,
      fontWeight: "700",
      fontFamily: "antonio",
      textTransform: "uppercase",
      padding: " 20px 40px",

      // [theme.breakpoints.up("xs")]: {
      //   // backgroundColor: "brown",
      // },
      // [theme.breakpoints.up("sm")]: {
      //   // backgroundColor: "pink",
      // },
      // [theme.breakpoints.up("md")]: {
      //   // backgroundColor: "green",
      // },
      // [theme.breakpoints.up("lg")]: {
      //   // backgroundColor: "cyan",
      // },
    },
    row: {
      backgroundColor: "white",
      fontFamily: "antonio",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#f2f2f2",
        boxShadow: "0px 4px 4px 1px #f2f2f2",
        // borderRadius: 40,
      },
    },
    link: {
      color: "blue",
      textDecoration: "underline",
      "&:hover": {
        color: "#0645AD",
      },
      "&:visited": {
        color: "#0B0080",
      },
      "&:active": {
        color: "purple",
      },
    },
  }));

  const classes = useStyles();

  return (
    <ThemeProvider className={classes.themeContainer}>
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h3">
          Top 5 Exchanges for Cryptocurrencies
        </Typography>
        <TableContainer className={classes.tableContainer}>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table>
              {/* Table Head */}
              <TableHead>
                {["Name", "Year Established", "URL"].map((head) => (
                  <TableCell
                    className={classes.tableHead}
                    key={head}
                    align={head === "Name" ? "" : "right"}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableHead>

              {/* Table Body */}
              <TableBody>
                {exchanges.map((row) => {
                  return (
                    <TableRow className={classes.row} key={row.name}>
                      {/* Coin Logo */}
                      <TableCell
                        component="th"
                        scope="row"
                        style={{
                          display: "flex",
                          fontSize: 20,
                          fontFamily: "Antonio",
                        }}
                      >
                        <div
                          style={{
                            // backgroundColor: "gray",
                            width: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img src={row?.image} height="50" />
                        </div>

                        {/*  Coin Name */}

                        <div
                          style={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          {row.name}
                        </div>
                      </TableCell>

                      {/* Year Established Column */}
                      <TableCell
                        align="right"
                        style={{
                          fontWeight: 500,
                          fontFamily: "antonio",
                          fontSize: 20,
                          textAlign: "center",
                        }}
                      >
                        {row.year_established}
                      </TableCell>
                      {/* URL Column */}
                      <TableCell
                        style={{
                          paddingRight: 40,
                          fontFamily: "antonio",
                          fontSize: 20,
                          textAlign: "center",
                        }}
                        align="right"
                      >
                        <a href={row.url} className={classes.link}>
                          {row.url}
                        </a>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};

export default CryptoExchanges;
