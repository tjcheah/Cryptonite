import React from 'react'
import { GetExchanges } from '../../config/api'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
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
} from '@material-ui/core'
import { CryptoState } from '../../CryptoContext'

const CryptoExchanges = () => {
  const [exchanges, setExchanges] = useState([])

  const fetchCoin = async () => {
    const { data } = await axios.get(GetExchanges())
    setExchanges(data)
  }

  useEffect(() => {
    fetchCoin()
  }, [])

  const { symbol, loading } = CryptoState()

  const useStyles = makeStyles((theme) => ({
    pagination: {
      '& .MuiPaginationItem-root': {
        color: 'black',
        fontFamily: 'antonio',
        marginBottom: 10,
      },
    },
    TableContainer: {
      // margin: 0,
      backgroundColor: '#f2f2f2',
      borderRadius: 40,
      // boxShadow: "0px 4px 4px 2px #aaa",
      // width: "80vw",
      textAlign: 'center',
      paddingTop: 40,

      [theme.breakpoints.up('xs')]: {
        // backgroundColor: "brown",
        height: '75%',
        width: '86%',
      },
      [theme.breakpoints.up('sm')]: {
        // backgroundColor: "pink",
        height: '75%',
        width: '86%',
      },
      [theme.breakpoints.up('md')]: {
        // backgroundColor: "green",
        height: '65%',
        width: '78%',
      },
      [theme.breakpoints.up('lg')]: {
        // backgroundColor: "cyan",
        height: '90%',
        width: 999,
      },
    },
    contTitle: {
      // backgroundColor: "gold",
      margin: ' 0px 0px 20px 0px',
      fontFamily: 'antonio',
      fontWeight: 'bold',
      color: 'black',
      textTransform: 'uppercase',
      textAlign: 'start',
      fontSize: 45,
      letterSpacing: 5,
      lineHeight: 1,
    },
    contSearch: {
      // backgroundColor: "#a9aaa9",
      backgroundColor: 'black',
      // color: "red",
      // borderRadius: 40,
      boxShadow: '0px 2px 2px 1px #aaa',
      marginBottom: 20,
      width: '100%',
    },
    tableHead: {
      backgroundColor: 'white',
      fontFamily: 'antonio',
      color: 'black',
      fontSize: 24,
      fontWeight: '700',
      fontFamily: 'antonio',
      textTransform: 'uppercase',
      padding: ' 20px 40px',

      [theme.breakpoints.up('xs')]: {
        // backgroundColor: "brown",
      },
      [theme.breakpoints.up('sm')]: {
        // backgroundColor: "pink",
      },
      [theme.breakpoints.up('md')]: {
        // backgroundColor: "green",
      },
      [theme.breakpoints.up('lg')]: {
        // backgroundColor: "cyan",
      },
    },
    row: {
      backgroundColor: 'white',
      fontFamily: 'antonio',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#f2f2f2',
        boxShadow: '0px 4px 4px 1px #f2f2f2',
        // borderRadius: 40,
      },
    },
  }))

  const classes = useStyles()

  return (
    <ThemeProvider>
      <Container>
        <Typography variant="h4">
          Top 5 Exchanges for Cryptocurrencies
        </Typography>
        <TableContainer
          style={{
            margin: '15px 0px',
            borderRadius: 30,
            boxShadow: '0px 2px 2px 1px #aaa',
          }}
        >
          {loading ? (
            <LinearProgress style={{ backgroundColor: 'gold' }} />
          ) : (
            <Table>
              {/* Table Head */}
              <TableHead>
                <TableRow>
                  {['Name', 'Year Established', 'URL'].map((head) => (
                    <TableCell
                      className={classes.tableHead}
                      key={head}
                      align={head === 'Name' ? '' : 'right'}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              {/* Table Body */}
              <TableBody>
                {exchanges.map((row) => {
                  return (
                    <TableRow className={classes.row} key={row.name}>
                      {/* Coin Column */}
                      <TableCell
                        component="th"
                        scope="row"
                        style={{
                          // backgroundColor: "red",
                          display: 'flex',
                          gap: 20,
                        }}
                      >
                        <div
                          style={{
                            // backgroundColor: "gray",
                            width: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <img src={row?.image} height="50" />
                        </div>
                        {/*  Coin Details */}
                        <div
                          style={{
                            width: '50%',
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        >
                          {row.name}
                        </div>
                      </TableCell>

                      {/* 24H Change Column */}
                      <TableCell
                        align="right"
                        style={{
                          // backgroundColor: "gray",
                          fontWeight: 500,
                          fontFamily: 'antonio',
                          fontSize: 22,
                        }}
                      >
                        {row.year_established}
                      </TableCell>
                      {/* Market Capital Column */}
                      <TableCell
                        style={{
                          // backgroundColor: "blue",
                          paddingRight: 40,
                          fontFamily: 'antonio',
                          fontSize: 22,
                        }}
                        align="right"
                      >
                        {row.url}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Container>
    </ThemeProvider>
  )
}

export default CryptoExchanges
