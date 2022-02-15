import React from 'react'
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  makeStyles,
  createTheme,
  ThemeProvider,
} from '@material-ui/core'

import { CryptoState } from '../CryptoContext'

import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: 'aquamarine',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
}))

const Header = () => {
  const classes = useStyles()

  const navigate = useNavigate()

  const { currency, setcurrency } = CryptoState()

  console.log(currency)

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
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate('/')}
              className={classes.title}
              variant="h6"
            >
              Cryptonite
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setcurrency(e.target.value)}
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'MYR'}>MYR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header
