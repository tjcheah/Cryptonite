import React from "react";
import { CoinList } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
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
import { useNavigate } from "react-router-dom";
import { Pagination } from "@material-ui/lab";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinsTable = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { currency, symbol, coins, loading, fetchCoins } = CryptoState();
  const history = useNavigate();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const useStyles = makeStyles((theme) => ({
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "black",
        fontFamily: "antonio",
        marginBottom: 10,
      },
    },
    TableContainer: {
      // margin: 0,
      backgroundColor: "#f2f2f2",
      // backgroundColor: "red",
      borderRadius: 40,
      // boxShadow: "0px 4px 4px 2px #aaa",
      // width: "80vw",
      textAlign: "center",
      paddingTop: 40,
      width: "100%",

      [theme.breakpoints.up("xs")]: {
        // backgroundColor: "brown",
        // height: "75%",
        width: "90%",
      },
      [theme.breakpoints.up("sm")]: {
        // backgroundColor: "pink",
        // height: "75%",
        width: "90%",
      },
      [theme.breakpoints.up("md")]: {
        // backgroundColor: "green",
        // height: "65%",
        width: "90%",
      },
    },
    contTitle: {
      // backgroundColor: "gold",
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
      // backgroundColor: "#a9aaa9",
      backgroundColor: "black",
      // color: "red",
      // borderRadius: 40,
      boxShadow: "0px 2px 2px 1px #aaa",
      marginBottom: 20,
      width: "100%",
    },
    tableHead: {
      backgroundColor: "white",
      fontFamily: "antonio",
      color: "black",
      fontSize: 24,
      fontWeight: "700",
      fontFamily: "antonio",
      textTransform: "uppercase",
      padding: " 20px 40px",

      [theme.breakpoints.up("xs")]: {
        // backgroundColor: "brown",
      },
      [theme.breakpoints.up("sm")]: {
        // backgroundColor: "pink",
      },
      [theme.breakpoints.up("md")]: {
        // backgroundColor: "green",
      },
      [theme.breakpoints.up("lg")]: {
        // backgroundColor: "cyan",
      },
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
    noMatch: {
      width: "100%",
      fontStyle: "italic",
      fontFamily: "Antonio",
      color: "#777",
      margin: "30px 0px 30px 0px",
    },
  }));

  const classes = useStyles();

  return (
    <ThemeProvider
    // theme={darkTheme}
    >
      <Container className={classes.TableContainer}>
        {/* Container Title */}
        <Typography className={classes.contTitle} variant="h4">
          Overall Cryptocurrency Prices
        </Typography>

        <TextField
          className={classes.contSearch}
          label="Search For a Crypto Coin"
          variant="filled"
          InputLabelProps={{
            style: {
              color: "black",
              fontFamily: "antonio",
              // backgroundColor: "beige",
              padding: "0px 50px",
            },
          }}
          style={{
            fontFamily: "antonio",
            backgroundColor: "#fff",
            // backgroundColor: "black",
            // boxShadow: "0px 4px 4px 2px #aaa",
            borderRadius: 40,
            padding: "0px 50px",
          }}
          InputProps={{
            style: {
              color: "black",
              fontFamily: "antonio",
            },
          }}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Table Container */}
        <TableContainer
          style={{
            margin: "15px 0px",
            borderRadius: 30,
            boxShadow: "0px 2px 2px 1px #aaa",
          }}
        >
          {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table>
              {/* Table Head */}
              <TableHead>
                <TableRow>
                  {[
                    "Coin",
                    "Price",
                    "24h Change",
                    "Circulating Supply",
                    "Market Cap",
                    "Overall Volume",
                  ].map((head) => (
                    <TableCell
                      className={classes.tableHead}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              {/* Table Body */}
              <TableBody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;

                    return (
                      <TableRow
                        onClick={() => history(`/coins/${row.id}`)}
                        className={classes.row}
                        key={row.name}
                      >
                        {/* Coin Column */}
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            // backgroundColor: "red",
                            display: "flex",
                            gap: 20,
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
                            <img
                              src={row?.image}
                              alt={row.name}
                              height="50"
                              style={
                                {
                                  // backgroundColor: "green",
                                }
                              }
                            />
                          </div>
                          {/*  Coin Details */}
                          <div
                            style={{
                              // backgroundColor: "pi`nk",
                              width: "50%",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <span
                              style={{
                                // backgroundColor: "purple",
                                fontFamily: "antonio",
                                fontWeight: 400,
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span
                              style={{
                                // backgroundColor: "indigo",
                                color: "#a9aaa9",
                                fontFamily: "antonio",
                                fontWeight: 600,
                                textTransform: "uppercase",
                              }}
                            >
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                        {/* Price Column */}
                        <TableCell
                          style={{
                            // backgroundColor: "indigo",
                            fontFamily: "antonio",
                            fontSize: 22,
                          }}
                          align="right"
                        >
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        {/* 24H Change Column */}
                        <TableCell
                          align="right"
                          style={{
                            // backgroundColor: "gray",
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                            fontFamily: "antonio",
                            fontSize: 22,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell
                          style={{
                            // backgroundColor: "blue",
                            paddingRight: 40,
                            fontFamily: "antonio",
                            fontSize: 22,
                          }}
                          align="right"
                        >
                          {symbol}{" "}
                          {numberWithCommas(
                            row.circulating_supply.toString().slice(0, -6)
                          )}
                        </TableCell>
                        {/* Market Capital Column */}
                        <TableCell
                          style={{
                            // backgroundColor: "blue",
                            paddingRight: 40,
                            fontFamily: "antonio",
                            fontSize: 22,
                          }}
                          align="right"
                        >
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                        </TableCell>
                        <TableCell
                          style={{
                            // backgroundColor: "blue",
                            paddingRight: 40,
                            fontFamily: "antonio",
                            fontSize: 22,
                          }}
                          align="right"
                        >
                          {symbol}{" "}
                          {numberWithCommas(
                            row.total_volume.toString().slice(0, -6)
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
          {handleSearch().length === 0 ? (
            <Typography className={classes.noMatch}>
              No coins match your search!
            </Typography>
          ) : (
            ""
          )}
        </TableContainer>

        <Pagination
          style={{
            // backgroundColor: "red",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          classes={{ ul: classes.pagination }}
          count={(handleSearch()?.length / 10).toFixed(0)}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 800);
          }}
        ></Pagination>
      </Container>
    </ThemeProvider>
  );
};

export default CoinsTable;
