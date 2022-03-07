import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import { numberWithCommas } from "../Crypto/CoinsTable";
import { useStyles } from "./trendStyle.js";

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    console.log(data);
    setTrending(data);
  };
  //retrieve trending coins and their details
  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const classes = useStyles();

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;
    //return a card with trending coin and details within the carousel
    return (
      <Link className={classes.carouselItem} to={`/coins/${coin.id}`}>
        <div className={classes.coinImage}>
          <img src={coin?.image} alt={coin.name} />
        </div>
        <div className={classes.coinDetails}>
          <span className={classes.coinTitle}>{coin?.name}</span>
          <div className={classes.coinHighlight}>
            <span className={classes.coinPrice}>
              {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
            </span>
            &nbsp;
            <span
              className={classes.coinChange}
              style={{
                color: profit > 0 ? "rgb(48, 231, 57)" : "red",
              }}
            >
              {profit && "+"}
              {coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </div>
          <div className={classes.coinInfo}>
            <span className={classes.volTitle}>24 Hour Volume</span>
            &nbsp;
            <span className={classes.coinVol}>
              {symbol} {numberWithCommas(coin?.total_volume.toFixed(2))}
            </span>
          </div>
          <div className={classes.coinInfo}>
            <span className={classes.capitalTitle}>MKT CAPITAL</span>
            &nbsp;
            <span className={classes.capital}>
              {symbol} {numberWithCommas(coin?.market_cap.toFixed(2))}
            </span>
          </div>
        </div>
      </Link>
    );
  });
  //shows one card per slide of carousel
  const responsive = {
    0: {
      items: 1,
    },
  };

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
  );
};

export default Carousel;
