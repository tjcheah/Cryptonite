import React from 'react'
import bottomLogo from './Cryptonite Title 2.png'
import {
  BottomNavigation,
  Container,
  Typography,
  makeStyles,
  createTheme,
  ThemeProvider,
} from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { FaRegCopyright } from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    display: 'flex',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    flexWrap: 'wrap',
    position: 'static',
    left: 0,
    bottom: 0,
    right: 0,
    paddingTop: 300,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    width: '95%',
    position: 'static',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#ffffff',
    color: '#000',
    bottom: 0,
    paddingTop: 25,
    paddingBottom: 220,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    boxShadow: '0px -4px 4px 2px #aaa',
    lineHeight: 18,
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 350,
    },
  },
  footerTop: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },
  footerTopLeft: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    marginLeft: 50,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
    },
  },
  footerTopRight: {
    width: '50%',
    marginTop: 15,
    marginRight: 50,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: 20,
      paddingLeft: 0,
      marginLeft: 0,
    },
  },
  footerBottom: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingTop: 25,
    paddingBottom: 20,
    marginLeft: 75,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 15,
      marginRight: 25,
    },
  },

  bottomLogo: {
    width: 305,
    height: 70,
    [theme.breakpoints.down('sm')]: {
      width: 260,
      height: 60,
    },
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Antonio',
    paddingTop: 5,
    width: '90%',
  },
  bottomTitle: {
    fontSize: 10,
    fontFamily: 'Antonio',
    fontWeight: 700,
    letterSpacing: 1,
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingBottom: 5,
    },
  },
  miniTitle: {
    fontSize: 13,
    fontFamily: 'Antonio',
    lineHeight: 2,
    letterSpacing: 1,
    '&:hover': {
      fontWeight: 550,
    },
    [theme.breakpoints.down('sm')]: {
      lineHeight: 1.6,
    },
  },
  column1: {
    width: '50%',
    flex: 2,
  },
  column2: { width: '50%', flex: 5 },
}))

const Footer = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Container className={classes.footerContainer}>
        <BottomNavigation className={classes.footer}>
          <Container className={classes.footerTop}>
            <Container className={classes.footerTopLeft}>
              <img
                onClick={() => navigate('/')}
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
            <Container className={classes.footerTopRight}>
              <Container className={classes.column1}>
                <Typography
                  onClick={() => navigate('/about')}
                  className={classes.miniTitle}
                >
                  About Us
                </Typography>
                <Typography
                  onClick={() => navigate('/help')}
                  className={classes.miniTitle}
                >
                  Contact Us
                </Typography>
                <Typography
                  onClick={() => navigate('/help')}
                  className={classes.miniTitle}
                >
                  Help
                </Typography>
                <Typography
                  onClick={() => navigate('/careers')}
                  className={classes.miniTitle}
                >
                  Careers
                </Typography>
              </Container>
              <Container className={classes.column2}>
                <Typography
                  onClick={() => navigate('/market')}
                  className={classes.miniTitle}
                >
                  Search Cryptocurrency
                </Typography>
                <Typography
                  onClick={() => navigate('/')}
                  className={classes.miniTitle}
                >
                  Trending Markets
                </Typography>
                <Typography
                  onClick={() => navigate('/help')}
                  className={classes.miniTitle}
                >
                  Top Gainers & Losers
                </Typography>
                <Typography
                  onClick={() => navigate('/news')}
                  className={classes.miniTitle}
                >
                  Crypto News
                </Typography>
              </Container>
            </Container>
          </Container>
          <Container className={classes.footerBottom}>
            <Typography className={classes.bottomTitle}>
              Help Center | Contact | Bug Bounty | Disclaimer | Terms of Service
              | Privacy Policy | Ad Policy
            </Typography>
            <Typography className={classes.bottomTitle}>
              <FaRegCopyright /> Cryptonite. All Rights Reserved.
            </Typography>
          </Container>
        </BottomNavigation>
      </Container>
    </ThemeProvider>
  )
}
export default Footer
