import { makeStyles } from '@material-ui/core'
import axios from 'axios'
import { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
import { TrendingCoins } from '../../config/api'
import { CryptoState } from '../../CryptoContext'
import { numberWithCommas } from '../CoinsTable'

const Carousel = () => {
  const [trending, setTrending] = useState([])
  const { currency, symbol } = CryptoState()

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency))

    console.log(data)
    setTrending(data)
  }

  useEffect(() => {
    fetchTrendingCoins()
  }, [currency])

  const useStyles = makeStyles((theme) => ({
    carousel: {
      height: '50%',
      maxWidth: '100%',
      minWidth: '30%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    carouselItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    coinImage: {
      width: '40%',
      display: 'flex',
      flexDirection: 'column',
      textTransform: 'uppercase',
      color: 'white',
      alignItems: 'center',
    },
    coinDetails: {
      width: '60%',
      display: 'flex',
      flexDirection: 'column',
      textTransform: 'uppercase',
      color: 'white',
    },
    coinInfo: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
  }))

  const classes = useStyles()

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0

    return (
      <Link className={classes.carouselItem} to={`/coins/${coin.id}`}>
        <div className={classes.coinImage}>
          <img
            src={coin?.image}
            alt={coin.name}
            height="200"
            style={{ marginBottom: 10 }}
          />
        </div>
        <div className={classes.coinDetails}>
          <span
            style={{
              fontSize: 66,
              fontWeight: 500,
              fontFamily: 'Antonio',
              color: 'rgb(156, 204, 149)',
            }}
          >
            {coin?.name}
          </span>
          <div className={classes.coinInfo}>
            <span
              style={{
                color: profit > 0 ? 'rgb(48, 231, 57)' : 'red',
                fontSize: 30,
                fontWeight: 500,
              }}
            >
              {profit && '+'}
              {coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
            &nbsp;
            <span
              style={{
                fontSize: 30,
                fontWeight: 500,
                flexGrow: 2,
                justifyContent: 'center',
              }}
            >
              {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
            </span>
          </div>
        </div>
      </Link>
    )
  })

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 1,
    },
  }

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationType="slide"
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  )
}

export default Carousel
